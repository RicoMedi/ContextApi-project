import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Item = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => {
    const updatedCart = cart.filter((item) => item.id !== props.id);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={removeItem}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
