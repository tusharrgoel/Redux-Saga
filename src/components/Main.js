import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { removetoCart } from "../redux/action";
import { emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const answer = useSelector((state) => state.product);
  const ans = answer.productname;
  console.log("data in main component from saga", answer.productname);
  const dispatch = useDispatch();
  const product = {
    name: "Iphone-13",
    price: "58,990",
    color: "white",
  };
  return (
    <div className="Main">
      <button type="submit" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
      <button type="submit" onClick={() => dispatch(removetoCart(product))}>
        Remove from Cart
      </button>
      <button type="submit" onClick={() => dispatch(emptyCart())}>
        Empty Cart
      </button>
      <button type="submit" onClick={() => dispatch(productList())}>
        Get Product List
      </button>
      <div className="product-container">
        {ans.map((item) => (
          <div className="product-item">
            <img
              src={item.photo}
              alt={item.name}
              height="300px"
              width="300px"
            />
            <div>Name:{item.name}</div>
            <div>Category:{item.category}</div>
            <div>Price:{item.price}</div>
            <div>Colour:{item.color}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
