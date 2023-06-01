
import Modal from 'react-bootstrap/Modal';
import { Button, ModalDialog } from 'react-bootstrap';

function Eliminar({producto, show, handleClose}) {

  const Eliminar = async(producto) =>{
    console.log(producto)
    const response = await fetch(`http://localhost:4000/api/eliminarP`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto),
  })
  handleClose()
}

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ModalDialog>¿Seguro quiere eliminar item?</ModalDialog>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>Eliminar(producto)}>
            Sí
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Eliminar;