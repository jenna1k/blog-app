const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("create project success ", action.post);
    case "CREATE_POST_ERROR":
      console.log("failed to create a post");
    case "DELETE_POST":
      console.log("delete post");
    case "DELETE_POST_ERROR":
      console.log("failed to delete a post");
    case "EDIT_POST":
      console.log("edit post");
    case "EDIT_POST_ERROR":
      console.log("failed to edit a post");
    default:
      return state;
  }
};

export default postReducer;
