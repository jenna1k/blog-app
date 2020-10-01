import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deletePost } from "../../store/actions/postActions";
import { dbService } from "../../fbase";

const PostDetails = ({ post, auth, deletePost, id, history, user }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleDeleteClick = (event) => {
    event.preventDefault();
    deletePost(id);
    history.push("/");
  };

  const handleCommentChange = (event) => {
    const {
      target: { value },
    } = event;
    setComment(value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const commentObj = {
      postId: id,
      comment,
      creatorId: auth.uid,
      creatorName: `${user.firstName} ${user.lastName}`,
      createdAt: Date.now(),
    };
    await dbService.collection("comments").add(commentObj);
    setComment("");
  };

  const getFilteredComments = async () => {
    await dbService
      .collection("comments")
      .where("postId", "==", id)
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const commentArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentArray);
      });
  };
  useEffect(() => {
    getFilteredComments();
  }, []);

  if (post) {
    return (
      <main className="h-full text-center p-10 lg:px-20">
        <article className="bg-gray-100 py-5 sm:px-1 md:px-4 lg:px-10 max-w-5xl mx-auto">
          {post.authorId === auth.uid ? (
            <div className="text-right">
              <Link to={`/editPost/${id}`}>
                <button className="outline-btn mx-3">Edit</button>
              </Link>
              <button className="outline-btn mx-3" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          ) : null}
          <p className="text-3xl font-medium capitalize py-5 break-words">
            {post.title}
          </p>
          <p className="text-sm font-normal tracking-wide capitalize">
            By {post.authorFirstName} {post.authorLastName}, Published on{" "}
            {new Date(post.createdAt).toDateString()}
          </p>

          <p className="py-10 sm:px-5 md:px-10 lg:px-20 text-left text-2xl break-words">
            {post.content}
          </p>
        </article>
        <section className="bg-gray-100 mt-8 py-5 sm:px-1 md:px-4 lg:px-10 max-w-5xl mx-auto">
          <div className="pt-5 px-10">
            {comments.map((comment) => (
              <div className="mb-2 text-left" key={comment.id}>
                <span className="font-thin tracking-tighter">
                  {new Date(comment.createdAt).toLocaleString()}{" "}
                </span>
                <span className="capitalize">{comment.creatorName} </span>
                <span className="text-gray-700"> {comment.comment}</span>
              </div>
            ))}
          </div>
          {auth.uid ? (
            <form
              onSubmit={handleCommentSubmit}
              className="flex tems-center justify-center px-10 my-5"
            >
              <input
                type="text"
                placeholder="comment"
                value={comment}
                onChange={handleCommentChange}
                className="w-3/5 input"
              />
              <input
                type="submit"
                value="submit"
                className="btn btn-blue h-12 ml-3"
              />
            </form>
          ) : null}
        </section>
      </main>
    );
  } else {
    return <div>Loding...</div>;
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  const user = state.firebase.profile;
  return {
    post,
    id,
    auth: state.firebase.auth,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (post) => dispatch(deletePost(post)),
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: "posts" }])
  )(PostDetails)
);
