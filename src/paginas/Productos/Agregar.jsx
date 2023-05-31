import React from 'react'
import NavbarJ from '../../componentes/Navbar'
import FormProducto from '../../componentes/producto/FormProducto'

export default function AgregarProductos() {
  return (
    <>
      <NavbarJ />
      <FormProducto nombre={'agregar'}/>
    </>
  )
}
