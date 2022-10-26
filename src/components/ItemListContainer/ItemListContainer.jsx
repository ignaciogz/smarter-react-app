import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import getItems from '../../services/getItems';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoryID} = useParams();
    const [items, setItems] = useState([]);

    async function fetchItems(categoryID) {
      let items = await getItems();

      if(categoryID) items = items.filter(element => element.categoryID === categoryID);
      setItems(items);
    }

    useEffect(() => {
      fetchItems(categoryID);
    }, [categoryID]);
 
    return (
      <ItemList items={items} />
    )
  }
  
export default ItemListContainer;