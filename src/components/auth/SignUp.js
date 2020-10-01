import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <form
        className="w-full max-w-lg bg-white shadow-md rounded mx-auto my-5"
        onSubmit={authError ? null : this.handleSubmit}
      >
        <div className="flex flex-wrap mx-3 py-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="input"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="input"
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="example@email.com"
              onChange={this.handleChange}
            />
          </div>
          <div className="w-full px-3">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <input
            className="btn btn-blue my-5 mx-auto"
            type="submit"
            value="Create an account"
          />
          <div className="w-full">
            {authError ? (
              <p className="text-red-600 text-xs italic mx-auto">
                Failed to sign up. Please check your form again
              </p>
            ) : null}
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
