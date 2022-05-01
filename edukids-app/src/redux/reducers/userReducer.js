import { REGISTER_REQUEST } from "../action";
import { initialState } from "../store";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        first_name: action.payload,
        last_name: action.payload,
        email: action.payload,
        password: action.payload,
        role: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
