import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import getItem from '../../services/getItem';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({greeting}) => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    async function fetchItem(id) {
      const item = await getItem(Number(id));
      setItem(item);
    }

    useEffect(() => {
      fetchItem(id);
    }, [id]);
 
    return (
      <ItemDetail item={item} />
    )
  }
  
export default ItemDetailContainer;