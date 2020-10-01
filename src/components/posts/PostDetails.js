import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PostDetails = ({ post }) => {
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
    post: post,
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "posts" }])
  )(PostDetails)
);
