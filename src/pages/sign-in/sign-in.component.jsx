import React from "react";
import FormInput from "../../components/form-input/form-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box">
        <div className="sign-in">
          <h2 style={{ color: "black" }}>I already have an account</h2>
          <span style={{ color: "black" }}>
            Sign in with your email and password
          </span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit">Sign In</CustomButton>
              <Link to="/signin/forgot-password">
                <CustomButton isGoogleSignIn>Forgot Password</CustomButton>
              </Link>
            </div>
          </form>
        </div>
        <div className="switchPage">
          <h3 style={{ color: "black" }}>Don't have an account?</h3>
          <Link to="/signup">
            <h4 style={{ color: "red" }}> Register</h4>
          </Link>
        </div>
      </div>
    );
  }
}
export default SignIn;
