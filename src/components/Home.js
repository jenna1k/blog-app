import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostList from "./posts/PostList";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <header
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" +
              ")",
          }}
        ></header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <PostList />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(Home);
