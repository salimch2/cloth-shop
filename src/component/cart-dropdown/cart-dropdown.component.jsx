import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CardItem from "../cart-item/cart-item.component";
import { selectCardItems } from "../../redux/cart/card.secetors";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCardHidden } from '../../redux/cart/card.actions'


const CartDropdown = ({ cardItems, history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cardItems.length ? (
        cardItems.map((cardItem) => (
          <CardItem key={cardItem.id} item={cardItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={()=>{
      history.push('/checkout');
      dispatch(toggleCardHidden())
      }}> GO TO CHECK OUT</CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
