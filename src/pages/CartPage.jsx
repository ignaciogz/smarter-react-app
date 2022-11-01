import Cart from "../components/Cart/Cart";

const CartPage = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<Cart />
			</section>
    )
}

export default CartPage;