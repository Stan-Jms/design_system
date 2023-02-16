import React from "react";
import { Buttons, Name, Email, Password } from "../index.js";
import "./style.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <div className="inputs">
        <Name />
        <Email />
        <Password />
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};
