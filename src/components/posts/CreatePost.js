import React, { Component } from "react";

export class CreatePost extends Component {
  render() {
    return (
      <div className="bg-white max-w-4xl mx-auto my-2 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create a Post
          </h3>
        </div>
        <div className="w-full mx-auto px-10 my-5">
          <input type="text" className="w-full input" placeholder="Title" />
          <textarea
            className="w-full input"
            placeholder="Write your post here..."
          ></textarea>
          <button className="btn btn-blue">Submit</button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
