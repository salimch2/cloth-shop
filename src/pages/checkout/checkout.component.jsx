import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/cart/card.secetors";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const CheckoutPage = ({ cardItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cardItems.map((cardItems) => (
      <CheckoutItem key={cardItems.idb} cardItems={cardItems} />
    ))}
    <div className="total">
      <span>total: ${total} </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCardTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
