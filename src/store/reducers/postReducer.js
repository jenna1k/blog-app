const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log(action.post);
  }
  return state;
};

export default postReducer;
