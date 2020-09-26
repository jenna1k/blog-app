export const createPost = (post) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        // authorId,
        // title,
        // content,
        // attachmentUrl,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
