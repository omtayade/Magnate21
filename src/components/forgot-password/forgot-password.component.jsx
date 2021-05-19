import React, { useState } from "react";
import FormInput from "../form-input/form-item.component";
import CustomButton from "../custom-button/custom-button.component";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


class ForgotPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
    };
  }
  resetPassword = () => {
    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(this.state.email)
      .then(function () {
        toast.success(
          "Password reset link has been sent to registerd email Id",
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
      })
      .catch(function (error) {
        toast.success(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box">
        <div className="forgot__password">
          <h2>Enter your email id</h2>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <div style={{ display: "flex" }}>
            <Link to="/signin">
              <CustomButton>
                {""}Back to Login{""}
              </CustomButton>
            </Link>
            <CustomButton onClick={this.resetPassword} isGoogleSignIn>
              {""}Reset Password{""}
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
