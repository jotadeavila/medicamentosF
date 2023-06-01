
import Modal from 'react-bootstrap/Modal';
import FormProveedor from './FormProveedor';

function Editar({producto, show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {console.log('desde modal'+producto.id)}
            <FormProveedor cerrar={handleClose} proveedorEditar={producto} nombre={'editar'}/>
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