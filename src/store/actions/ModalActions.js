//============================================ Actions ============================================
export const SET_Basic_Modal_LOADING = "SET_Basic_Modal_LOADING";
export const SET_Basic_Modal_SUCCESS = "SET_Basic_Modal_SUCCESS";
export const SET_Basic_Modal_FAILURE = "SET_Basic_Modal_FAILURE";

//======================================== Action Creators ========================================

export const setBasicModal = (ev, isOpen) => dispatch => {
  // isOpen === true or false
  ev.preventDefault();

  return Promise.resolve(() =>
    dispatch({ type: SET_Basic_Modal_LOADING, payload: true })
  )
    .then(() => dispatch({ type: SET_Basic_Modal_SUCCESS, payload: isOpen }))
    .catch(err =>
      dispatch({
        type: SET_Basic_Modal_FAILURE,
        payload: err
      })
    );
};
