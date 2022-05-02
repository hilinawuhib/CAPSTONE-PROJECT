import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
const aComposeFunction = window._REDUX_DEVROOLS_EXTENSION_COMPOSE__ || compose;
const user=JSON.parse(localStorage.getItem("user"))
export const initialState = {
  user: user ? user : null
};
const bigReducer = combineReducers({
  user: userReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
