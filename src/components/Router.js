import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./layout/Navbar";
import PostDetails from "./posts/PostDetails";
import CreatePost from "./posts/CreatePost";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/post">
          <CreatePost />
        </Route>
        <Route exact path="/post:id">
          <PostDetails />
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