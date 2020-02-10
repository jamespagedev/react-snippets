// Actions
import {
  SET_USER_LOADING,
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from "../actions/index.js";

// Default State
const initialState = {
  loadingUser: false,
  userFirstName: "",
  userLastName: "",
  error: ""
};

// Reducer
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOADING:
      return {
        ...state,
        loadingUser: action.payload
      };

    case SET_USER_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        userFirstName: action.payload.userFirstName,
        userLastName: action.payload.userLastName
      };

    case SET_USER_FAILURE:
      return {
        ...state,
        loadingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
