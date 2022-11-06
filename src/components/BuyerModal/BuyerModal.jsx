import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import AppButton from '../AppButton/AppButton'

import { BagHeartFill } from 'react-bootstrap-icons'
import './BuyerModal.scss'

function BuyerModal({ show, handleClose, handleFinishOrder }) {
  return (
      <Modal show={show} onHide={handleClose} className='App-buyer-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Datos de contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
								pattern="[0-9]"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
				<Modal.Footer>
				<AppButton 
          className="App-btn-general btn-payout"
          Icon={<BagHeartFill size={20} />}
          text="Comprar ya !"
					textClassName="text-uppercase"
          onClick={() => handleFinishOrder()}
        />
        </Modal.Footer>
      </Modal>
  );
}

export default BuyerModal;
