import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  render() {
    return (
      <div className="w-full max-w-xs mx-auto my-5">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="label" for="username">
              Username
            </label>
            <input
              className="input"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="label" for="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="button">
              Sign In
            </button>
            <Link
              to="signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Don't have an account?
            </Link>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    );
  }
}

export default SignIn;
