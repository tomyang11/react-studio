import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
	item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

	const onAddItem = (newItem) => {
    const found = cart.find(({ name }) => name === newItem.name);
    if (found != null) {
      setCart(cart.map(x => x.name === newItem.name ? {...found, count: found.count+1} : x));
    } else {
      setCart(cart => {
        return [...cart, newItem];
      });
    }
    
    setTotalCost(totalCost+newItem.price);
  };

	return (
		<div className="flex flex-row justify-between">
      <div className="bg-violet-200 w-1/2">
        <h1>Tom's Bakery</h1>
        <ul>
          {bakeryData.map((item, index) => (
            <BakeryItem
              key={index}
              item={{
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
              }}
              addItem={onAddItem}
            />
          ))}
        </ul>
      </div>
			<div className="bg-emerald-400 w-1/2 flex flex-col justify-start items-center">
				<h2>Cart</h2>
        <ul>
            {cart.map((cartItem) => (
              <div>
                <p>{cartItem.name}</p>
                <p>{cartItem.price}</p>
                <p>{cartItem.count}</p>
              </div>
            ))}
        </ul>
        <h2>Total Cost: ${totalCost}</h2>
			</div>
		</div>
	);
}

export default App;
