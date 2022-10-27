import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import getItem from '../../services/getItem';
import { useParams } from 'react-router-dom';
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";

const ItemDetailContainer = () => {
    const {itemID} = useParams();
    const [item, setItem] = useState(null);
    const [loaded, setLoaded] = useState(false);

    async function fetchItem(itemID) {
      const item = await getItem(Number(itemID));
      
      setItem(item);
      setLoaded(true);
    }

    useEffect(() => {
      setLoaded(false);
      fetchItem(itemID);
    }, [itemID]);
 
    return (
      loaded ? <ItemDetail item={item} /> : <SpinnerWidget background={"gray"} />
    )
  }
  
export default ItemDetailContainer;