import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./constants";
import axios from "axios";
import { push } from "react-router-redux";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:3007/users", tokenConfig(getState))
    .then((response) =>
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      })
    )
    .catch((error) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const register =
  ({ firstName, lastName, email, password }) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:3007/users/register",
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        })
      )
      .catch((error) => {
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:3007/users/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
        dispatch(push("/"));
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const configure = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    configure.headers["token"] = token;
  } else {
    console.log("error");
  }

  return configure;
};
