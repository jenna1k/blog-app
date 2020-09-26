const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("create project success ", action.post);
    case "CREATE_POST_ERROR":
      console.log("failed to create a post");
  }
  return state;
};

export default postReducer;
