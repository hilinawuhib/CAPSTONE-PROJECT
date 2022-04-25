export const SET_USER_NAME = "SET_USER_NAME";

export const setUsernameAction = ( first_name,
    last_name,
    email,
    password,
    role,) => ({
  type: SET_USER_NAME,
  payload: first_name,
  last_name,
  email,
  password,
  role,
});
