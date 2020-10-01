import React, { Component } from "react";
import PostCard from "./posts/PostCard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import background from "../assets/circuit-board.svg";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <>
        <header
          className="text-center text-white mx-auto bg-purple-700"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <p className="font-black text-6xl tracking-tight pt-6">Dev Blog</p>
          <p className="font-semibold text-lg tracking-wide">
            Fresh articles about technology
          </p>
          <p className="font-thin text-base tracking-widest pb-6">
            Get the latest information, insights, announcements, and news
          </p>
        </header>
        <main className="flex-grow flex justify-center items-center">
          {posts && posts.length ? (
            <div className="mx-auto px-4 sm:px-8 py-2 text-center">
              <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
                {posts &&
                  posts.map((post) => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
          ) : (
            <div className="m-20 text-center">
              <p>
                <Link to="/signin">
                  <b>Sign In</b>
                </Link>{" "}
                and Create New Article!
              </p>
              <p>
                Don't have an account yet?{" "}
                <Link to="/signup">
                  <b>Sign Up here</b>
                </Link>
              </p>
            </div>
          )}
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts",
    },
  ])
)(Home);
