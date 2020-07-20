import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/card.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.style.scss";

const CartIcon = ({toggleCardHidden}) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: ()=> dispatch(toggleCardHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);
