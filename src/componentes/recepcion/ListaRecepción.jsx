import {React, useEffect, useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Editar from './EditarRecepcion';
import Eliminar from './EliminarRecepcion';

export default function ListadoRecepciones() {

    const [recepciones, setRecepciones] = useState([])
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
        const response = await fetch('http://localhost:4000/api/recepciones')
        const resultado = await response.json()
        setRecepciones(resultado)
    }

    useEffect(()=>{
        datos()
    }, [])
    
    return (
        <Container>
            <Table striped bordered hover className='mt-2'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Proveedor</th>
                        <th>N° Factura</th>
                        <th>Cantidad</th>
                        <th>Lote</th>
                        <th>Invima</th>
                        <th>Vencimiento</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        
                {recepciones.map((r, index) => (
                <tr key={index}>
                    <td>{r.producto}</td>
                    <td>{r.proveedor}</td>
                    <td>{r.numFactura}</td>
                    <td>{r.cantidad}</td>
                    <td>{r.lote}</td>
                    <td>{r.regInvima}</td>
                    <td>{r.vencimiento}</td>
                    <td>{r.descripcion}</td>
                    <td><Button onClick={()=>handleShow(r)} variant="secondary">Editar</Button> <Button onClick={()=>handleShow2(r)} variant="danger">Eliminar</Button></td>
                </tr>
                ))}
                </tbody>
            </Table>
            {
                console.log('veee '+productoEditar.vencimiento)
            }
            <Editar producto={productoEditar} show={show} handleClose={handleClose}/>
            <Eliminar producto={productoEliminar} show={show2} handleClose={handleClose2}/>
        </Container>
    );
}

