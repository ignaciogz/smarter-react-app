import Info from "../components/Info/Info";

const Error404Page = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<Info title="Página NO encontrada !" img="error_404"/>
			</section>
    )
}

export default Error404Page;