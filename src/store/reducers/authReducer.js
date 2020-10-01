const initState = {
  authError: null,
  isLoggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        authError: null,
        isLoggedIn: true,
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
