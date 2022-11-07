import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget"

import getDocFirestore from '../../services/getDocFirestore'

const ItemDetailContainer = () => {
    let {itemID} = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchItem = useCallback(async (itemID) => {
      const item = await getDocFirestore("products", "id", itemID);
      
      !item && navigate("/error404");
      
      setItem(item);
      setLoaded(true);
    }, [navigate]);

    useEffect(() => {
      setLoaded(false);
      fetchItem(Number(itemID));
    }, [itemID, fetchItem]);

    return (
      loaded ? <ItemDetail item={item} /> : <SpinnerWidget background={"gray"} />
    )
}
  
export default ItemDetailContainer;