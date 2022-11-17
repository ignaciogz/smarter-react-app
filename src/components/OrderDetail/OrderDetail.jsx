import AppButton from '../AppButton/AppButton'
import toast, { Toaster } from 'react-hot-toast'

import formatter from '../../utils/formatter'

import './OrderDetail.scss'

const OrderDetail = ({ cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, compactDetail }) => {
		const handleDeleteItemClick = id => {
			toast.error('Producto eliminado', {
				position: compactDetail ? "top-right" : "top-center",
			});
			deleteItem(id);
		}

		return (
			<>
        <table className={`table App-order-detail${compactDetail ? " compact" : ""}`}>
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
								<div>
									<img src={item.img} alt={`Imagen de ${item.name}`} />
									<div className="d-inline-flex">
										<AppButton 
											as="Link"
                      to={`/item/${item.id}`}
											textClassName={item.outOfStock ? 'text-decoration-line-through' : null}
											text={item.name} 
										/>
										{item.outOfStock ? <div className='out-of-stock'>sin stock</div> : null}

										<AppButton text="Eliminar" onClick={()=> handleDeleteItemClick(item.id)} />
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
				<Toaster />
			</>
    )
}

export default OrderDetail;