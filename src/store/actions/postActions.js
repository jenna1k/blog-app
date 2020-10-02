export const createPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
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

export const editPost = (id, post) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(id)
      .update(post)
      .then(() => {
        dispatch({ type: "EDIT_POST" });
      });
  };
};

export const deletePost = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POST" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_POST_ERROR", err });
      });
  };
};
