import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
			}}>
				<ItemListContainer />
			</section>
    )
}

export default HomePage;