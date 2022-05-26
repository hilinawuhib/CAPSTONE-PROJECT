import {
  GET_COURSE_INITIALIZE,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAIL,
} from "../action/constants";
import { initialState } from "../store";

const coursesReducer = (state = initialState.course, action) => {
  switch (action.type) {
    case GET_COURSE_INITIALIZE:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        coursecollection: action.payload,
      };
    case GET_COURSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default coursesReducer;
