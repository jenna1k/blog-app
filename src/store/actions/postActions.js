// import { firestore } from "firebase";
import { v4 as uuidv4 } from "uuid";

export const createPost = (post) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        postId: uuidv4(),
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
