import React, { Component } from "react";
import { createPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class CreatePost extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="bg-white max-w-4xl mx-auto my-2 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create a Post
          </h3>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="w-full mx-auto px-10 my-5"
        >
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
            className="w-full input"
            placeholder="Title"
          />
          <textarea
            id="content"
            onChange={this.handleChange}
            className="w-full input"
            placeholder="Write your post here..."
          ></textarea>
          <input type="submit" value="Submit" className="btn btn-blue" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CreatePost));
