import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget"

import getDocsFirestore from '../../services/getDocsFirestore'

const ItemListContainer = () => {
    const {categoryID} = useParams();
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchItems(categoryID) {  
      let items = await getDocsFirestore("products", "category.id", categoryID);
      setItems(items);
      setLoaded(true);
    }

    useEffect(() => {
      setLoaded(false);
      fetchItems(Number(categoryID));
    }, [categoryID]);
 
    return (
      loaded ? <ItemList items={items} /> : <SpinnerWidget background={"black"} />
    )
  }
  
export default ItemListContainer;