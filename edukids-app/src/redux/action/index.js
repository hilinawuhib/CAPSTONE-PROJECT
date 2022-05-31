import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_COURSE_INITIALIZE,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAIL,
} from "./constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  ({ firstName, lastName, email, password, role }) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:3007/users/register",
        JSON.stringify({ firstName, lastName, email, password, role }),
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
        if (response.ok) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data,
          });
          
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

export const GetCourses = () => {
  return (dispatch) => {
    dispatch(GetCourseInitiate());

    axios
      .get("http://localhost:3007/courses")
      .then((response) => {
        dispatch(GetCourseSuccess(response.data));
      })
      .catch((error) => {
        dispatch(GetCourseFailed(error.message));
      });
  };
};

const GetCourseInitiate = () => {
  return {
    type: GET_COURSE_INITIALIZE,
    payload: {
      isLoading: true,
    },
  };
};

const GetCourseSuccess = ({ coursecollection }) => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: {
      coursecollection,
    },
  };
};

const GetCourseFailed = (error) => {
  return {
    type: GET_COURSES_FAIL,
    payload: {
      error,
    },
  };
};
// export const fetchCourses = () => {
//   return async (dispatch, getState) => {
//     const stateRightnow = getState();
//     try {
//       const res = await fetch("http://localhost:3007/courses");
//       if (res.ok) {
//         const { data } = await res.json();
//         console.log(data)
//         dispatch({
//           type: GET_COURSES,
//           payload: data,
//         });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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
