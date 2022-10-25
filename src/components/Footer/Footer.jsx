
const Footer = () => {
  return (
		<section className="container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/footer-1800.webp'})`,
			backgroundColor: "black",
    	padding: "1.5rem 0",
			backgroundSize: "cover",
			backgroundPosition: "left"
		}}>
			<small class="copyright">
				SMARTER <span>&copy;</span> 2022 <span>|</span> Desarrollado por <span class="desarrollador">Ignacio Gutierrez</span>
			</small>
		</section>
  )
}

export default Footer;