import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div className="Main">
      <button type="submit" onClick={() => dispatch(emptyCart())}>
        Empty Cart
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
            <button type="submit" onClick={() => dispatch(addToCart(item))}>
              Add To Cart{" "}
            </button>
            <button type="submit" onClick={() => dispatch(removetoCart(item.id))}>
              Remove From Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
