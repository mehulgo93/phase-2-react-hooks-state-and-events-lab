import React from "react";
import { useState } from "react"

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const addToCart = () => setInCart(!inCart)
  const cartClass = inCart ? "in-cart" : ""
  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={inCart ? 'Remove From Cart' : 'Add to Cart'}>Add to Cart</button>
    </li>
  );
}

export default Item;
