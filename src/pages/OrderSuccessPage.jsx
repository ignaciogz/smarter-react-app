import { useParams } from "react-router-dom";
import Info from "../components/Info/Info";

const OrderSuccessPage = () => {
		let {orderID} = useParams();

    return (
			<section className="App-content container-fluid" style={{ 
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
			}}>
				<Info 
					title="Gracias por elegirnos !" 
					img="order_success"
					text={`Numero de orden: ${orderID}`}
				/>
			</section>
    )
}

export default OrderSuccessPage;