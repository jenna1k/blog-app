import React, { Component } from "react";
import { editPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class EditPost extends Component {
  componentWillMount() {
    this.setState({
      title: this.props.title,
      content: this.props.content,
    });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editPost(this.props.id, this.state);
    this.props.history.push("/");
  };

  render() {
    if (this.props.title && this.props.content) {
      return (
        <div className="bg-white max-w-4xl mx-auto my-2 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit a Post
            </h3>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="w-full mx-auto px-10 my-5"
          >
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="w-full input"
              placeholder="Title"
            />
            <textarea
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
              className="w-full input"
              placeholder="Write your post here..."
            ></textarea>
            <input type="submit" value="Submit" className="btn btn-blue" />
          </form>
        </div>
      );
    } else {
      return <div>Loding...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  const title = post ? post.title : null;
  const content = post ? post.content : null;
  return {
    id,
    title,
    content,
    auth: state.firebase.auth,
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps, { editPost }),
    firestoreConnect([{ collection: "posts" }])
  )(EditPost)
);
