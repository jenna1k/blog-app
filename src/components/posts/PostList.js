import React, { Component } from "react";
import PostCard from "./PostCard";

export class PostList extends Component {
  render() {
    return (
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    );
  }
}

export default PostList;
