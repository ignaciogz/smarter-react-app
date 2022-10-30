import { useEffect } from "react";
import { useState } from "react";

import './ItemCount.scss'

const ItemCount = ({ stock, initial = 1, currentStock, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [currentStock, initial]);
    
  const handleAdd = () => {
    count < stock && onAdd(count + 1) && setCount(count + 1);
  };

  const handleSustract = () => {
    count > 1 && onAdd(count - 1) && setCount(count - 1);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if(inputValue <= stock) inputValue > 1 
      ? onAdd(inputValue) && setCount(inputValue)
      : onAdd(1) && setCount(1);
    else onAdd(stock) && setCount(stock);
  }

  return (
    <div className="App-item-count">
      <button disabled={count <= initial ? true : false} onClick={handleSustract}>-</button>
        <input type="number" name="item-count" 
          value={count}
          onChange={handleChange}
        />
      <button disabled={count >= currentStock ? true : false } onClick={handleAdd}>+</button>
    </div>
  );
}

export default ItemCount;