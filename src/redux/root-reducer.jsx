import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cardReducer from "./cart/card.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["card"],
};

const rootReducer =  combineReducers({
  user: userReducer,
  card: cardReducer,
});

export default persistReducer(persistConfig , rootReducer)
