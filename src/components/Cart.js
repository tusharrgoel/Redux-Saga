import React from "react";
import { useSelector } from "react-redux";
function Cart() {
  const items = useSelector((state) => state.cart.cartproducts);
  let Amount =
    items.length &&
    items.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <h1> Checkout page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{Amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Amount/10}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{Amount}-{Amount/10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
