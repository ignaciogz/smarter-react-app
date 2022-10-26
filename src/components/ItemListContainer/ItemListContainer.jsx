import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import getItems from '../../services/getItems';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoryID} = useParams();
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    async function fetchItems(categoryID) {
      let items = await getItems();

      if(categoryID) items = items.filter(element => element.categoryID === categoryID);
      setItems(items);
      setLoaded(true);
    }

    useEffect(() => {
      setLoaded(false);
      fetchItems(categoryID);
    }, [categoryID]);
 
    return (
      <ItemList items={items} loaded={loaded} />
    )
  }
  
export default ItemListContainer;