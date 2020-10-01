import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { authService, fbInstance } from "../../fbase";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="w-full max-w-xs mx-auto bg-white shadow-md rounded p-8 my-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              onChange={this.handleChange}
              className="input"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={this.handleChange}
              className="input"
              id="password"
              type="password"
              placeholder="******************"
            />
            <div className="mx-auto">
              {authError && (
                <p className="text-red-500 text-xs italic">
                  Login Failed. Please Check Email or Password.
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <input type="submit" value="Sign In" className="btn btn-blue" />

            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
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
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
