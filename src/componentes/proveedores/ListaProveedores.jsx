import {React, useEffect, useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Editar from './EditarProveedor';
import Eliminar from './EliminarProveedor';

export default function ListadoProveedores() {

    const [proveedores, setProveedores] = useState([])
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (producto=0) => { 
        setShow(true)
        setProductoEditar(producto)
    }
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (proveedor) => {
        setShow2(true)
        setProductoEliminar(proveedor)
    }

    const [productoEditar, setProductoEditar] = useState([])
    const [productoEliminar, setProductoEliminar] = useState([])

    const datos = async () =>{
        const response = await fetch('http://localhost:4000/api/proveedores')
        const resultado = await response.json()
        setProveedores(resultado)
    }

    useEffect(()=>{
        datos()
    }, [])
    
    return (
        <Container>
            <Table striped bordered hover className='mt-2'>
                <thead>
                    <tr>
                        <th>Tipo ID</th>
                        <th>Número ID</th>
                        <th>Proveedor</th>
                        <th>Dirección</th>
                        <th>Nombre</th>
                        <th>Contacto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        
                {proveedores.map((proveedor, index) => (
                <tr key={index}>
                    <td>{proveedor.tipoID}</td>
                    <td>{proveedor.numeroID}</td>
                    <td>{proveedor.proveedor}</td>
                    <td>{proveedor.direccion}</td>
                    <td>{proveedor.nombreContacto}</td>
                    <td>{proveedor.numeroContacto}</td>
                    <td><Button onClick={()=>handleShow(proveedor)} variant="secondary">Editar</Button> <Button onClick={()=>handleShow2(proveedor)} variant="danger">Eliminar</Button></td>
                </tr>
                ))}
                </tbody>
            </Table>
            {
                console.log(productoEliminar.id)
            }
            <Editar producto={productoEditar} show={show} handleClose={handleClose}/>
            <Eliminar producto={productoEliminar} show={show2} handleClose={handleClose2}/>
        </Container>
    );
}

