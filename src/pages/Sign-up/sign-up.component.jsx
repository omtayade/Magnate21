import React from "react";
import { toast } from "react-toastify";
import FormInput from "../../components/form-input/form-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "react-responsive-modal/styles.css";

import { auth, createUserProfile } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  }

  sendEmailVerification = () => {
    try {
      var user = firebase.auth().currentUser;
      toast.success(
        "Verify your email! Email verification link sent to your registered email-id",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      user.sendEmailVerification().then(function () {});
    } catch (error) {
      toast.error("Somethings wrong", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, phone, password, confirmPassword } = this.state;

    const reg = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    if (password != confirmPassword) {
      toast.error("Passwords don't match , Re-enter password !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!reg.test(password)) {
      toast.error(
        "Password must conain Minimum eight characters, at least one letter(uppercase and lowercase) and one number and one special character",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName, phone });

      this.setState({
        displayName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message);
    }

    const user = firebase.auth().currentUser;
    if (user) this.sendEmailVerification();
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, phone, password, confirmPassword } = this.state;
    return (
      <div className="box">
        <div className="signup">
          <h2 className="title" style={{ color: "black" }}>
            Don't have an account ?
          </h2>
          <span style={{ color: "black" }}>
            Sign up with your email and password
          </span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              label="Username"
              value={displayName}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="tel"
              pattern="[1-9]{1}[0-9]{9}"
              name="phone"
              label="Enter your mobile mumber"
              value={phone}
              maxlength="10"
              minLength="10"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              value={password}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              handleChange={this.handleChange}
              required
            />
            <CustomButton
              type="submit"
              onClick={() => this.setState({ open: true })}
            >
              SIGN UP
            </CustomButton>
          </form>
        </div>
        <div className="switchPage">
          <h3>Already have an account!</h3>
          <Link to="/signin">
            <h4>Login</h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;