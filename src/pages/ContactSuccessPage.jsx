import { useParams } from "react-router-dom";
import Info from "../components/Info/Info";

const ContactSuccessPage = () => {
		let {name} = useParams();

		return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<Info 
					title={`¡ Gracias por contactarnos !`}
					img="contact_success"
					text={`${name}, un asesor te responderá a la brevedad.`}
				/>
			</section>
    )
}

export default ContactSuccessPage;