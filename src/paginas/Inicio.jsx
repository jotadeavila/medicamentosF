import React from 'react'
import NavbarJ from '../componentes/Navbar'
import { Alert, Col, Container, Row } from 'react-bootstrap'

export default function Inicio() {
  return (
    <>
      <NavbarJ />
      <Container fluid>
      <Alert className='mt-5' key={1} variant={'info'}>
          Bienvenid@ al módulo de ayuda a inventario
        </Alert>
    </Container>
      
    </>

  )
}
