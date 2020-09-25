import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="label" for="grid-first-name">
              First Name
            </label>
            <input
              class="input"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="label" for="grid-last-name">
              Last Name
            </label>
            <input
              class="input"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="label" for="grid-email">
              Email
            </label>
            <input
              class="input"
              id="grid-email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div class="w-full px-3">
            <label class="label" for="grid-password">
              Password
            </label>
            <input
              class="input"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
