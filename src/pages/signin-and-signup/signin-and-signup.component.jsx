import React from "react";

import "./signin-and-signup.style.scss";

import  SignIn  from "../../component/sign-in/sign-in.component";
import  SignUp  from "../../component/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="SignInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUp;
