import React, { FormEvent, ChangeEvent } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils';

interface SignInState {
  email: string;
  password: string;
}

class SignIn extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  hanledSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.hanledSubmit}>
          <FormInput
              type="email"
              name="email"
              label="email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            required
            handleChange={this.handleChange}
          />
        </form>
        <div className="buttons">
          <CustomButton >SUBMIT</CustomButton>
          <CustomButton googleSignIn onClick={signInWithGoogle}>SignIn With Google</CustomButton>
        </div>
      </div>
    );
  }
}

export default SignIn;
