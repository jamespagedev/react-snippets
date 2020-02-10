// Actions
import {
  SET_Basic_Modal_LOADING,
  SET_Basic_Modal_SUCCESS,
  SET_Basic_Modal_FAILURE
} from "../actions/index.js";

// Default State
const initialState = {
  loadingModal: false,
  isBasicModalOpen: false,
  error: ""
};

// Reducer
export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Basic_Modal_LOADING:
      return {
        ...state,
        loadingModal: action.payload
      };

    case SET_Basic_Modal_SUCCESS:
      return {
        ...state,
        loadingModal: false,
        isBasicModalOpen: action.payload
      };

    case SET_Basic_Modal_FAILURE:
      return {
        ...state,
        loadingModal: false,
        error: action.payload
      };
    default:
      return state;
  }
};
