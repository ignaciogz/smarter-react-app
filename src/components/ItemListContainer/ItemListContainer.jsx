import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import getItems from '../../services/getItems';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    async function fetchItems() {
      const items = await getItems(); 
      setItems(items);
    }

    useEffect(() => {
      fetchItems();
    }, []);
 
    return (
      <ItemList items={items} />
    )
  }
  
export default ItemListContainer;