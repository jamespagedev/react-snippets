let testUser = {
  firstName: "James",
  lastName: "Page"
};

//============================================ Actions ============================================
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILURE = "SET_USER_FAILURE";

//======================================== Action Creators ========================================

export const setUser = ev => dispatch => {
  ev.preventDefault();

  return Promise.resolve(() =>
    dispatch({ type: SET_USER_LOADING, payload: true })
  )
    .then(() => dispatch({ type: SET_USER_SUCCESS, payload: testUser }))
    .catch(err =>
      dispatch({
        type: SET_USER_FAILURE,
        payload: err
      })
    );
};
