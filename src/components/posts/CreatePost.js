import React, { Component } from "react";

export class CreatePost extends Component {
  render() {
    return (
      <div className="container mx-auto px-5">
        <form>
          <input type="text" />
          <input type="textarea" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
