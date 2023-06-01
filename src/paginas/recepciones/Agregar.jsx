import React from 'react'
import NavbarJ from '../../componentes/Navbar'
import FormRecepcion from '../../componentes/recepcion/FormRecepcion'

export default function AgregarRecepcion() {
  return (
    <>
      <NavbarJ />
      <FormRecepcion nombre={'agregar'}/>
    </>
  )
}
