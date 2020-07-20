import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CardItem from "../cart-item/cart-item.component";
import {selectCardItems } from '../../redux/cart/card.secetors'
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cardItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cardItems.map((cardItem) => (
        <CardItem key={cardItem.id} item={cardItem} />
      ))}
    </div>
    <CustomButton> GO TO CHECK OUT</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cardItems: selectCardItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
