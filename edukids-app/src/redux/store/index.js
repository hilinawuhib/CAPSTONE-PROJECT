import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "../reducers/coursesReducer";
import userReducer from "../reducers/userReducer";
const aComposeFunction = window._REDUX_DEVROOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  users: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  },
  course: {
    coursecollection: [],
  },
};
const bigReducer = combineReducers({
  user: userReducer,
  course: coursesReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
