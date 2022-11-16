import Checkout from "../components/Checkout/Checkout";

const CheckoutPage = () => {
    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<Checkout />
			</section>
    )
}

export default CheckoutPage;