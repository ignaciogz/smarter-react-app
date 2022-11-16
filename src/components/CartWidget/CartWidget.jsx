import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import AppButton from '../AppButton/AppButton'
import CartCompact from '../CartCompact/CartCompact'

import useModal from '../../hooks/useModal';

import CartContext from '../../context/CartContext'
import { Cart3 } from 'react-bootstrap-icons'

const CartWidget = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { getItemsQty } = useContext(CartContext);
  const qty = getItemsQty();

  return (
    <>
      <AppButton 
        className="App-btn-navbar-icon"
        Icon={<Cart3 size={32}/>}
        Badge={<Badge bg="dark" className={qty ? "visible" : "invisible"}>{ qty }</Badge>}
        onClick={openModal}
      />
      <CartCompact show={isOpen} handleClose={closeModal} />
    </>
	)
}

export default CartWidget;