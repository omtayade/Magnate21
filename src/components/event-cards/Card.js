import React, { useState } from "react";
import { AppModal } from "../modal/AppModal";
import { toast } from "react-toastify";
import "./Card.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Redirect } from "react-router";
import { createEventsCollection } from "../../firebase/firebase.utils";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Card({ title, children, CurrentUser }) {
  const [open, setOpen] = useState(false);

  const [isRegister, setisRegister] = useState(false);
  const [BtnColor, setBtnColor] = useState(false);

  const fetchEvents = async () => {
    if (auth.currentUser) {
      const eventRef = firestore.doc(
        `users/${auth.currentUser.uid}/events/${title}`
      );
      const snapShot = await eventRef.get();
      if (snapShot.exists) {
        setisRegister(true);
        setBtnColor(true);
      }
    }
    return 1;
  };

  fetchEvents();

  const confirmRegister = async () => {
    try {
      if (isRegister == false) {
        await createEventsCollection(title, CurrentUser);
        setisRegister(true);
        setBtnColor(true);
        toast.success("Registered Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = async () => {
    if (CurrentUser) {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified && CurrentUser) {
        confirmAlert({
          title: "Confirm to submit",
          message: `Are you sure you want to register for ${title} ?`,
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                confirmRegister();
              },
            },
            {
              label: "No",
              onClick: () => {},
            },
          ],
        });
      } else if (auth.currentUser.emailVerified == false && CurrentUser)
        alert("Verify email first!");
    } else {
      alert("Login first");
    }
  };

  return (
    <div className="card">
      <div className="card__heading">{title}</div>
      <div className="card__content">
        <p>{children}</p>
      </div>

      <div className="card__footer">
        <div className="card__btn__holder">
          <div
            className="card__btn"
            style={
              BtnColor
                ? { backgroundColor: "rgb(255, 102, 0)", color: "black" }
                : null
            }
            onClick={handleClick}
          >
            {isRegister ? "Registered" : "Register"}
          </div>
        </div>

        <div className="card__btn__holder">
          <div className="card__btn" onClick={() => setOpen(true)}>
            Details
          </div>
        </div>
      </div>

      <div>
        <AppModal open={open} modalTitle={"Details"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          aliquam asperiores eum a porro. Alias labore quis itaque assumenda
          ipsam eius? Ipsum hic sint quo ab molestiae blanditiis recusandae.
          Laborum.
        </AppModal>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  CurrentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Card);
