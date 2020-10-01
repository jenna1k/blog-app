import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deletePost } from "../../store/actions/postActions";
import { dbService } from "../../fbase";

const PostDetails = ({ post, auth, deletePost, id, history }) => {
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
                <Link to={`/editPost/${id}`}>
                  <button className="btn bg-gray-200">Edit</button>
                </Link>
                <button className="btn bg-red-400" onClick={handleDeleteClick}>
                  Delete
                </button>
              </div>
            ) : null}
            <p className="pb-3">{post.content}</p>
          </div>
        </article>
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}
        </div>
        {auth.uid ? (
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              placeholder="comment"
              value={comment}
              onChange={handleCommentChange}
            />
            <input type="submit" value="submit" />
          </form>
        ) : null}
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
