import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react';

function FormProveedor({proveedorEditar, nombre}) {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const [prov, setProv] = useState(proveedorEditar ? proveedorEditar : '');


  const onSubmit = async (data) => {
    console.log(data);
    const ruta = nombre === 'agregar'? 'agregarPr' : 'actualizarPr'
    const metodo = nombre === 'agregar' ? 'POST' : 'PUT'
    // const response = await fetch('http://localhost:4000/api/agregarP', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // }).then(res => res.json()).then(data => console.log(data))
    // console.log(response.status)
    const response = await fetch(`http://localhost:4000/api/${ruta}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    const resultado = await response.json();
    console.log(response.status)
    console.log(resultado)
  }

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="number" defaultValue={prov.id} placeholder="" readOnly {...register('id', {
            required: false, 
          })} />
      </Form.Group>

      <Form.Group className="mb-3 mt-3">
          <Form.Label>Tipo de ID</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={prov.tipoID} onChange={(e) => setProv(e.target.value)} {...register('tipoID')}>
            {/* <option>Seleccione estado</option> */}
            <option value="1">Cedula</option>
            <option value="2">NIT</option>
            <option value="3">Cedula extranjeria</option>
            <option value="4">NIT Extranjeria</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Numero de identificación</Form.Label>
          <Form.Control type="number" defaultValue={prov.numeroID} onChange={(e) => setProv(e.target.value)} placeholder="Número de identificación" {...register('numeroID', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre o razón social</Form.Label>
          <Form.Control type="text" defaultValue={prov.proveedor} onChange={(e) => setProv(e.target.value)} placeholder="Nombre de proveedor" {...register('proveedor', {
            required: true
          })} />
          {
            errors.nombre?.type === 'required' && <Alert className='mt-1' key={'warning'} variant={'warning'}>
            ¡Este campo es necesario!
          </Alert>
          }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" defaultValue={prov.direccion} onChange={(e) => setProv(e.target.value)} placeholder="Dirección del proveedor" {...register('direccion')} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre de contacto</Form.Label>
          <Form.Control type="text" defaultValue={prov.nombreContacto} onChange={(e) => setProv(e.target.value)} placeholder="Nombre de contacto" {...register('nombreContacto')} />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Numero de contacto</Form.Label>
          <Form.Control type="number" defaultValue={prov.numeroContacto} onChange={(e) => setProv(e.target.value)} placeholder="Número de contacto" {...register('numeroContacto', {
            required: true, 
          })} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {nombre === 'agregar' ? 'Agregar' : 'Editar'}
        </Button>
      </Form>
    </Container>

  );
}

export default FormProveedor;