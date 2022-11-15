import ContactUs from "../components/ContactUs/ContactUs";

const ContactPage = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<ContactUs />
			</section>
    )
}

export default ContactPage;