import React from 'react'
import NavbarJ from '../../componentes/Navbar'
import FormProveedor from '../../componentes/proveedores/FormProveedor'

export default function AgregarProveedor() {
  return (
    <>
      <NavbarJ />
      <FormProveedor nombre={'agregar'}/>
    </>
  )
}
