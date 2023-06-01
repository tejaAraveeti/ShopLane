import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import { cartSelector } from '../Redux/CartSlice';

function Cart() {
  const cartItems = useSelector(cartSelector);

  let subTotal = 0;
  for (let each of cartItems) {
    subTotal += each.price * each.itemQuantity;
  }
  let shippingEstimate = subTotal * 0.05;
  let taxEstimate = subTotal * 0.18; 
  let orderTotal = subTotal + shippingEstimate + taxEstimate;

  return (
    <div>
      {cartItems.map((product) => (
        <CartItems key={product.id} data={product} />
      ))}
      <div className="card cartSummaryDiv">
        <div className="summaryDiv">
          <div className="text-center h4 orderSummary">Order Summary</div>
          <div className="row subtotal">
            <p>CartPage</p>
            <p className="col-lg-7 h6">Subtotal</p>
            <p className="col-lg-5">${subTotal}</p>
          </div>
          <div className="row shippingEstimate">
            <p className="col-lg-7 h6">Shipping Estimate</p>
            <p className="col-lg-5">${shippingEstimate}</p>
          </div>
          <div className="row taxEstimate">
            <p className="col-lg-7 h6">Tax Estimate</p>
            <p className="col-lg-5">${taxEstimate}</p>
          </div>
          <div className="row orderTotal">
            <p className="col-lg-7 h4">Order Total</p>
            <p className="col-lg-5 h5">${orderTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
