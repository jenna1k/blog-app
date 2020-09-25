import React, { Component } from "react";

export class CreatePost extends Component {
  render() {
    return (
      <div>
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
