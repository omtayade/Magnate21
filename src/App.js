import React from "react";
// import Header from './components/headers/headers.component'
import { auth, createUserProfile } from "./firebase/firebase.utils";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/About us/about-us.component";

import Body from "./pages/events/Body";

import Home from "./components/home/home";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/Sign-up/sign-up.component";
import ForgotPassword from "./components/forgot-password/forgot-password.component";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/footer'
import Carousel from "./pages/Speakers/Carousel";
import { ToastContainer } from "react-toastify";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth); //App.js me createuserProfile user ko database me dalne ka kaam nahi kar raha hai vo to signup compo me hi ho jaata hai  ,yaha pe ye bas database me already stored user ka userRef bhej raha hai taki ham apne state me daal sake,

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signin/forgot-password"
            component={ForgotPassword}
          />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/events" component={Body} />
          <Route exact path="/speakers" component={Carousel} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/events" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/events" /> : <SignUp />
            }
          />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //the rightmost setcurrentuser is the one which is imported from redux user actions.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
