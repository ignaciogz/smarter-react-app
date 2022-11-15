import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row'
import AppButton from '../AppButton/AppButton'

import useForm from '../../hooks/useForm'

import { Send } from 'react-bootstrap-icons'
import './ContactUs.scss'

const ContactUs = () => {
	const navigate = useNavigate();

	const handleFinishContact = async (contactData) => {
		navigate(`/contact/success/${contactData.name}`);
	}

	const { formRef, handleSubmit } = useForm(handleFinishContact);
	
  return (
			<Container className="container-lg container App-contact">
				<Row className="row-gap">
					<h1>Contáctanos</h1>
					<Col className="col-10 offset-1 col-md-6 offset-md-3">
						<Form ref={formRef} id="form-contact" onSubmit={handleSubmit}>
							<FloatingLabel
								controlId="floatingName"
								label="Nombre completo"
								className="mb-3"
							>
								<Form.Control
									name="name"
									type="text"
									minLength="4"
									placeholder="Ingrese su nombre completo"
									required
								/>
							</FloatingLabel>								
							<FloatingLabel
								controlId="floatingEmail"
								label="Email"
								className="mb-3"
							>
								<Form.Control
									name="email"
									type="email"
									placeholder="Ingrese su email"
									required
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingPhone"
								label="Teléfono"
								className="mb-3"
							>
								<Form.Control
									name="phone"
									type="number"
									placeholder="Ingrese su teléfono"
									min="0"
									required
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingMsg"
								label="Mensaje"
								className="mb-3"
							>
								<Form.Control
									as="textarea"
									className="form-textearea"
									placeholder="Escriba su consulta"
									maxLength="300"
									required
								/>
							</FloatingLabel>
							<Form.Group className="form-footer">
								<AppButton 
									className="App-btn-general btn-payout"
									Icon={<Send size={20} />}
									text="Enviar !"
									textClassName="text-uppercase"
									form="form-contact"
									type="submit"
								/>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
	)
}

export default ContactUs;