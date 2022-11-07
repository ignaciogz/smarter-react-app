import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import AppButton from '../AppButton/AppButton'

import useForm from '../../hooks/useForm'

import { BagHeartFill } from 'react-bootstrap-icons'
import './BuyerModal.scss'

function BuyerModal({ show, handleClose, handleFinishOrder }) {
  const { formRef, handleSubmit } = useForm(handleFinishOrder);

  return (
      <Modal show={show} onHide={handleClose} className='App-buyer-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Datos de contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} id="form-buyer" onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                required
                autoFocus
                minLength="4"
              />
            </Form.Group>
						<Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                name="telefono"
                type="number"
                min="1000000"
                required
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
          form="form-buyer"
          type="submit"
        />
        </Modal.Footer>
      </Modal>
  );
}

export default BuyerModal;
