import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from '../../services/getItem';

const ItemDetailContainer = ({greeting}) => {
    const [item, setItem] = useState();

    async function fetchItems() {
      const item = await getItem(2); 
      console.log(item);
      setItem(item);
    }

    useEffect(() => {
      fetchItems();
    }, []);
 
    return (
      item && <ItemDetail item={item} />
    )
  }
  
export default ItemDetailContainer;