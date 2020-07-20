import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cardReducer from "./cart/card.reducer";

export default combineReducers({
  user: userReducer,
  card: cardReducer,
});
