import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./layout/Navbar";
import PostDetails from "./posts/PostDetails";
import CreatePost from "./posts/CreatePost";
import EditPost from "./posts/EditPost";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post">
          <CreatePost />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
        <Route path="/editPost/:id">
          <EditPost />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
