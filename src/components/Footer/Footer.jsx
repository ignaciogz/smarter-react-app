
const Footer = () => {
  return (
		<footer className="App-footer container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/footer-1800.webp'})`,
		}}>
			<small>
				SMARTER <span>&copy;</span> 2022 <span>|</span> Desarrollado por <span className="developer">Ignacio Gutierrez</span>
			</small>
		</footer>
  )
}

export default Footer;