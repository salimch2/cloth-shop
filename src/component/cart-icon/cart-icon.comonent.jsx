import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/card.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { selectCardItemsCount } from "../../redux/cart/card.secetors";
import { createStructuredSelector } from "reselect";

import "./cart-icon.style.scss";

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});
const maStateToProps = createStructuredSelector({
  itemCount: selectCardItemsCount,
});
export default connect(maStateToProps, mapDispatchToProps)(CartIcon);
