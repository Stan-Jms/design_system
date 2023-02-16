import React from "react";
import { SignIn, SignUp } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
