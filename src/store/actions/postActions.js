export const createPost = (post) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        authorId: authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: Date.now(),
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
