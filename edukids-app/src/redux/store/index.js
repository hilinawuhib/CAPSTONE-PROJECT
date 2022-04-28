import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
const aComposeFunction = window._REDUX_DEVROOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  user: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  },
};
const bigReducer = combineReducers({
  user: userReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
