import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react';

function FormProducto({cerrar, productoEditar, nombre}) {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const [prod, setProd] = useState(productoEditar ? productoEditar : '');


  const onSubmit = async (data) => {
    console.log(data);
    const ruta = nombre === 'agregar'? 'agregarP' : 'actualizarP'
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
    cerrar()
  }

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="number" defaultValue={prod.codigo} placeholder="" readOnly {...register('codigo', {
            required: false, 
          })} />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" defaultValue={prod.nombre} onChange={(e) => setProd(e.target.value)} placeholder="Nombre del producto" {...register('nombre', {
            required: true
          })} />
          {
            errors.nombre?.type === 'required' && <Alert className='mt-1' key={'warning'} variant={'warning'}>
            ¡Este campo es necesario!
          </Alert>
          }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" defaultValue={prod.descripcion} onChange={(e) => setProd(e.target.value)} placeholder="Descripción del producto" {...register('descripcion')} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Estado</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={prod.estado} onChange={(e) => setProd(e.target.value)} {...register('estado')}>
            {/* <option>Seleccione estado</option> */}
            <option value="1">Activo</option>
            <option value="2">Inactivo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre de laboratorio</Form.Label>
          <Form.Control type="text" defaultValue={prod.nombreLab} onChange={(e) => setProd(e.target.value)} placeholder="Laboratorio del producto" {...register('laboratorio')} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {nombre === 'agregar' ? 'Agregar' : 'Editar'}
        </Button>
      </Form>
    </Container>

  );
}

export default FormProducto;