import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FormProducto from './FormProducto';

function Editar({producto, show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {console.log('desde modal'+producto.nombre)}
            <FormProducto productoEditar={producto} nombre={'editar'}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Editar;