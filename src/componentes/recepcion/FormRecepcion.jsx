import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useForm} from 'react-hook-form'
import { useEffect, useState } from 'react';

function FormRecepcion({cerrar, proveedorEditar, nombre}) {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const [rec, setRec] = useState(proveedorEditar ? proveedorEditar : '');
  const [allProducto, setAllProducto] = useState([])
  const [allProveedores, setAllProveedores] = useState([])

  const obtenerFyH = () =>{
    var today = new Date();
 
    var now = today.toLocaleString();
    return now
  }
  const obtenerF = () =>{
    var today = new Date();
    var fecha = `${today.getFullYear()}-${today.getMonth() < 9 ? `0${today.getMonth()+1}`: `${today.getMonth()+1}`}-${today.getDate() < 10 ? `0${today.getDate()}`: `${today.getDate()}`}`
    console.log(fecha);
    return fecha
  }

  const productos = async () => {
    const response = await fetch('http://localhost:4000/api/productosR')
    const resultado = await response.json()
    setAllProducto(resultado)
  }

  const proveedores = async () => {
    const response = await fetch('http://localhost:4000/api/proveedores')
    const resultado = await response.json()
    setAllProveedores(resultado)
  }

  useEffect(()=>{
    productos()
    proveedores()
  }, [])

  const onSubmit = async (data) => {
    console.log(data);
    const ruta = nombre === 'agregar'? 'agregarR' : 'actualizarR'
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
          <Form.Control type="number" defaultValue={rec.id} placeholder="" readOnly {...register('id', {
            required: false, 
          })} />
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Fecha y hora</Form.Label>
          <Form.Control type="text" defaultValue={rec.date ? rec.date : obtenerFyH()} placeholder="" readOnly {...register('date', {
            required: false, 
          })} />
      </Form.Group>

      <Form.Group className="mb-3 mt-3">
          <Form.Label>Producto</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={rec.producto} onChange={(e) => setRec(e.target.value)} {...register('producto',{
            required: true,
            validate: (value) => value != null
          })}>
            {
              nombre !== 'agregar' && <option selected hidden value={rec.producto}>{rec.producto}</option>
            }
            {
              nombre === 'agregar' && <option hidden value={null}>Seleccione producto</option>
            }
            
            {
              allProducto.map((p, i) => (
                <option key={i} value={p.nombre}>{p.nombre}</option>
              ))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-3">
          <Form.Label>Proveedor</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={rec.proveedor} onChange={(e) => setRec(e.target.z)} {...register('proveedor', {
            required: true,
            validate: (value) => value != null
          })}>
            {
              nombre !== 'agregar' && <option selected hidden value={rec.proveedor}>{rec.proveedor}</option>
            }
            {
              nombre === 'agregar' && <option hidden value={null}>Seleccione producto</option>
            }
            {
              allProveedores.map((p, i) => (
                <option key={i} value={p.proveedor}>{p.proveedor}</option>
              ))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Numero de factura</Form.Label>
          <Form.Control type="number" defaultValue={rec.numFactura} onChange={(e) => setRec(e.target.value)} placeholder="Número de factura" {...register('numFactura', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="number" defaultValue={rec.cantidad} onChange={(e) => setRec(e.target.value)} placeholder="Cantidad" {...register('cantidad', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Lote</Form.Label>
          <Form.Control type="number" defaultValue={rec.lote} onChange={(e) => setRec(e.target.value)} placeholder="Cantidad" {...register('lote', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Registro INVIMA</Form.Label>
          <Form.Control type="text" defaultValue={rec.regInvima} onChange={(e) => setRec(e.target.value)} placeholder="Registro invima" {...register('recInvima', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Fecha de vencimiento</Form.Label>
          <Form.Control min={obtenerF()} type="text" defaultValue={rec.vencimiento} onChange={(e) => setRec(e.target.value)} placeholder="Año/Mes/Dia" {...register('vencimiento', {
            required: true, 
          })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" defaultValue={rec.descripcion} onChange={(e) => setRec(e.target.value)} placeholder="Descripción" {...register('descripcion', {
            required: true
          })} />
          {
            errors.nombre?.type === 'required' && <Alert className='mt-1' key={'warning'} variant={'warning'}>
            ¡Este campo es necesario!
          </Alert>
          }
        </Form.Group>

        <Button variant="primary" type="submit">
          {nombre === 'agregar' ? 'Agregar' : 'Editar'}
        </Button>
      </Form>
    </Container>

  );
}

export default FormRecepcion;