import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PostDetails = (props) => {
  const { post } = props;
  if (post) {
    return (
      <section class="w-full mx-auto md:w-2/3 flex flex-col items-center px-3">
        <article class="flex flex-col shadow my-4">
          <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
          <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">
              Tech
            </a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
              {post.title}
            </a>
            <p href="#" class="text-sm pb-8">
              By{" "}
              <a href="#" class="font-semibold hover:text-gray-800">
                David Grzyb
              </a>
              , Published on {new Date(post.createdAt).toDateString()}
            </p>
            <h1 class="text-2xl font-bold pb-3">Introduction</h1>
            <p class="pb-3">{post.content}</p>
          </div>
        </article>

        <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
          <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
            <img
              src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              class="rounded-full shadow h-32 w-32"
            />
          </div>
          <div class="flex-1 flex flex-col justify-center md:justify-start">
            <p class="font-semibold text-2xl">David</p>
            <p class="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel neque non libero suscipit suscipit eu eu urna.
            </p>
            <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
              <a class="" href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
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
