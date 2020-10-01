import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deletePost } from "../../store/actions/postActions";

const PostDetails = ({ post, auth, deletePost, id, history }) => {
  const handleDeleteClick = (event) => {
    event.preventDefault();
    deletePost(id);
    history.push("/");
  };

  if (post) {
    return (
      <section className="w-full mx-auto md:w-2/3 flex flex-col items-center px-3">
        <article className="flex flex-col shadow my-4">
          <div className="bg-white flex flex-col justify-start p-6">
            <p className="text-3xl font-bold pb-4">{post.title}</p>
            <p className="text-sm pb-8">
              By{" "}
              <span className="font-semibold">
                {post.authorFirstName} {post.authorLastName}
              </span>
              , Published on {new Date(post.createdAt).toDateString()}
            </p>
            {post.authorId === auth.uid ? (
              <div className="flex items-center">
                <button className="btn bg-gray-200">Edit</button>
                <button className="btn bg-red-400" onClick={handleDeleteClick}>
                  Delete
                </button>
              </div>
            ) : null}
            <p className="pb-3">{post.content}</p>
          </div>
        </article>
      </section>
    );
  } else {
    return <div>Loding...</div>;
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post,
    id,
    auth: state.firebase.auth,
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
