import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

export class Navbar extends Component {
  handleClick = () => {
    this.props.signOut();
  };
  render() {
    const { auth, profile } = this.props;
    return (
      <nav className="flex items-center justify-between flex-wrap p-2 text-purple-800">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Dev Blog
            </span>
          </div>
        </Link>
        {auth.uid ? (
          <div className="flex items-center">
            <Link to="/post">
              <button className="outline-btn shadow mr-2">Post</button>
            </Link>
            <div className="inline-block mx-1 pt-1 h-8 w-8 lg:mx-4 bg-green-300 rounded-full text-center text-lg font-mono font-bold uppercase shadow-solid">
              {profile.initials}
            </div>
            <button
              className="outline-btn shadow mr-2"
              onClick={this.handleClick}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="outline-btn mr-2">
            <Link to="/signin">Sign In</Link>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
