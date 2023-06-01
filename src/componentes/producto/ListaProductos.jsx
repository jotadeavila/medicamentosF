import {React, useEffect, useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Editar from './EditarProducto';
import Eliminar from './EliminarProducto';

export default function ListadoProductos() {

    const [productos, setProductos] = useState([])
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (producto) => { 
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
        const response = await fetch('http://localhost:4000/api/productos')
        const resultado = await response.json()
        setProductos(resultado)
    }

    useEffect(()=>{
        datos()
    }, [])
    
    return (
        <Container>
            <Table striped bordered hover className='mt-2'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Laboratorio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        
                {productos.map((producto, index) => (
                <tr key={index}>
                    <td>{producto.codigo}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.estado}</td>
                    <td>{producto.nombreLab}</td>
                    <td><Button onClick={()=>handleShow(producto)} variant="secondary">Editar</Button> <Button onClick={()=>handleShow2(producto)} variant="danger">Eliminar</Button></td>
                </tr>
                ))}
                </tbody>
            </Table>
            {
                console.log(productoEditar.nombre)
            }
            <Editar producto={productoEditar} show={show} handleClose={handleClose}/>
            <Eliminar producto={productoEliminar} show={show2} handleClose={handleClose2}/>
        </Container>
    );
}

