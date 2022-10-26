import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from '../../services/getItem';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({greeting}) => {
    const {id} = useParams();
    const [item, setItem] = useState();

    async function fetchItems(id) {
      const item = await getItem(id);
      setItem(item);
    }

    useEffect(() => {
      fetchItems(id);
    }, [id]);
 
    return (
      item && <ItemDetail item={item} />
    )
  }
  
export default ItemDetailContainer;