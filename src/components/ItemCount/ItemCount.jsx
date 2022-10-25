import { useState } from "react";

import './ItemCount.scss'

const ItemCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);
    
  const handleAdd = () => {
    count < stock && setCount(count + 1);
  };

  const handleSustract = () => {
    count > 1 && setCount(count - 1);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;

		if(inputValue <= stock) inputValue > 1 ? setCount(inputValue) : setCount(1);
    else setCount(stock);
  }

  return (
    <div className="App-item-count">
      <button disabled={count === 1 ? true : false} onClick={handleSustract}>-</button>
        <input type="number" name="item-count" 
          value={count}
          onChange={handleChange}
      	/>
      <button disabled={count === stock ? true : false} onClick={handleAdd}>+</button>
    </div>
  );
}

export default ItemCount;