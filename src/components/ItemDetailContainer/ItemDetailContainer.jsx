import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from '../../services/getItem';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {itemID} = useParams();
    const [item, setItem] = useState(null);

    async function fetchItem(itemID) {
      const item = await getItem(Number(itemID));
      setItem(item);
    }

    useEffect(() => {
      fetchItem(itemID);
    }, [itemID]);
 
    return (
      <ItemDetail item={item} />
    )
  }
  
export default ItemDetailContainer;