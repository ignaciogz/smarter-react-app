import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import AppButton from '../AppButton/AppButton'

import useForm from '../../hooks/useForm'

import { BagHeartFill } from 'react-bootstrap-icons'
import './BuyerModal.scss'

function BuyerModal({ show, handleClose, handleFinishOrder }) {
  const { formRef, handleSubmit } = useForm(handleFinishOrder);
  const [error, setError] = useState(false);

  const checkEmail = () => {
    const inputEmail1 = document.getElementById('form-buyer').email.value;
    const inputEmail2 = document.getElementById('form-buyer').email2.value;
    
    setError(inputEmail1 !== inputEmail2);
  }

  return (
      <Modal show={show} onHide={handleClose} className='App-buyer-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Datos de contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} id="form-buyer" onSubmit={!error ? handleSubmit : e => e.preventDefault()}>
						<Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                name="name"
                type="text"
                autoFocus
                minLength="4"
                required
              />
            </Form.Group>
						<Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={checkEmail}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repetir email</Form.Label>
              <Form.Control
                name="email2"
                type="email"
                onChange={checkEmail}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                name="phone"
                type="number"
                min="0"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
				<Modal.Footer className={error ? "justify-content-between" : null}>
        {error ? <small>El email NO coincide</small> : null}
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
