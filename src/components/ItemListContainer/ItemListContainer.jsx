import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import getItems from '../../services/getItems';
import { useParams } from 'react-router-dom';
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";

const ItemListContainer = () => {
    const {categoryID} = useParams();
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchItems(categoryID) {
      let items = await getItems();

      if(categoryID) items = items.filter(element => element.category.id === categoryID);
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