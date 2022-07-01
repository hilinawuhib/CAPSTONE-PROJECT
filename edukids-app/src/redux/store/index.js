import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coursesReducer from "../reducers/coursesReducer";
import userReducer from "../reducers/userReducer";
const aComposeFunction = window._REDUX_DEVROOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  users: {
    isAuthenticated:null,
    token: localStorage.getItem("token"),
    user: null,
  },
  course: {
    coursecollection: [],
    loading:false,
    error:null
  },
};
const bigReducer = combineReducers({
  users: userReducer,
  course: coursesReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
);
