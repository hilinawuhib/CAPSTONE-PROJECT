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
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:3007/users", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const register =
  ({ firstName, lastName, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ firstName, lastName, email, password });

    axios
      .post("http://localhost:3007/users/register", body, config)
      .then((res) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch();
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axios
      .post("http://localhost:3007/users/login", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch();
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
