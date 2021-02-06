export const setPerson = (e) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_PERSON", payload: e.target.value });
  };
};

export const clearPerson = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_PERSON", payload: "" });
  };
};
