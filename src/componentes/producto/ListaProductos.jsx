import {React, useEffect, useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Editar from './EditarProducto';

export default function ListadoProductos() {

    const [productos, setProductos] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (producto) => { 
        setShow(true)
        setProductoEditar(producto)
    }
       

    const [productoEditar, setProductoEditar] = useState([])

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
                    <td><Button onClick={()=>handleShow(producto)} variant="secondary">Editar</Button> <Button variant="danger">Eliminar</Button></td>
                </tr>
                ))}
                </tbody>
            </Table>
            {
                console.log(productoEditar.nombre)
            }
            <Editar producto={productoEditar} show={show} handleClose={handleClose}/>
        </Container>
    );
}

