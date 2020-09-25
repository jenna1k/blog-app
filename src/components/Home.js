import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostList from "./posts/PostList";

export class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/post">
          <button className="btn btn-blue">Write a Post</button>
        </Link>
        <PostList />
      </div>
    );
  }
}

export default Home;
