export const handleShowPerson = () => {
  return async (dispatch) => {
    await dispatch({ type: "SHOW_PERSONS" });
  };
};
