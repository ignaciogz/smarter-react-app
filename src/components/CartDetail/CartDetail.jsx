import AppButton from '../AppButton/AppButton'

import formatter from '../../utils/formatter'

import './CartDetail.scss'

const CartDetail = ({ cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, compactDetail }) => {
		return (
        <table className={`table App-cart-detail ${compactDetail ? "compact" : null}`}>
        	<thead className="table-dark">
        		<tr>
        			<th scope="col" colSpan="2">Producto</th>
        			<th scope="col">Precio</th>
        			<th scope="col">Cantidad</th>
        			<th scope="col">Subtotal</th>
        		</tr>
        	</thead>
        	<tbody>
        		{cart.map((item) =>
        		<tr key={`item-${item.id}`}>
        			<td colSpan="2">
        				<div className="App-cart-td-col1">
        					<img src={item.img} alt={`Imagen de ${item.name}`} />
        					<div className="d-inline-flex">
        						<div className={item.outOfStock ? 'text-decoration-line-through' : null}>{item.name}</div>
        						{item.outOfStock ? <div className='out-of-stock'>sin stock</div> : null}

        						<AppButton text="Eliminar" onClick={()=> deleteItem(item.id)}
        							/>
        					</div>
        				</div>
        			</td>
        			<td>{formatter.price(item.price)}</td>
        			<td>{item.quantity}</td>
        			<td>{formatter.price(getTotalToPayPerProduct(item))}</td>
        		</tr>
        		)}
        	</tbody>
        	<tfoot>
        		<tr>
        			<td colSpan="4">TOTAL</td>
        			<td colSpan="5">{formatter.price(getTotalToPay())}</td>
        		</tr>
        	</tfoot>
        </table>
    )
}

export default CartDetail;