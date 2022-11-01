import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const ItemDetailPage = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<ItemDetailContainer />
			</section>
    )
}

export default ItemDetailPage;