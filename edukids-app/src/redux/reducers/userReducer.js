import { SET_USER_NAME } from '../actions'
import { initialState } from '../store'


const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        first_name:action.payload,
        last_name:action.payload,
        email:action.payload,
        password:action.payload,
        role:action.payload
      }

    default:
      return state
  }
}

export default userReducer