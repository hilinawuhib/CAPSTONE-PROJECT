import { GET_COURSES} from "../action/constants";
import { initialState } from "../store";

 const coursesReducer = (state = initialState.course, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        coursecollection: action.payload,
      };

    default:
      return state;
  }
};
 export default coursesReducer;
