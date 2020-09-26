export const createPost = (post) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_POST", post });
  };
};
