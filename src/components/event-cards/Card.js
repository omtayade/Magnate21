import React, { useState } from "react";
import "./Card.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import close from "../../assets/closeIcon.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createEventsCollection } from "../../firebase/firebase.utils";
import "firebase/firestore";
import "firebase/auth";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
function Card({ title, children, CurrentUser }) {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState("description");

  const changeDetail = (detail) => {
    setDetail(detail);
  };

  const draftDetails = [
    "Startup Expo is an exhibition event for startup models. The viewers will get an opportunity to get exposure to a successfully implemented startup and business model from ideation to funding stage and get motivated to be a job creator. The participants will present the roadmap of their implemented startup and win a chance to get exciting prizes.",
    "Round1: Every Contestant needs to present the following points in front of judges and the audience. They need to elaborate each point within a 5-minute time span.",
    "The final score would be decided on 80/20 principle where 20 percent audience vote would be considered along with 80 percent of judges.",
    "1. The Jury can ask frequent questions anytime in between. And the participants need to respond in a very short and precise manner.\n 2. Contestant’s need to elaborate each point within a 5-minute time span.\n 3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.",
    "Companies investing in startups, R&D’s, Investors, Startup building organizations, Incubation centers",
  ];
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
      await createEventsCollection(title, CurrentUser);
      setisRegister(true);
      setBtnColor(true);
      toast.success("Registered successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = async () => {
    if (CurrentUser) {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified && CurrentUser) {
        if (isRegister == false) {
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
        }
      } else if (auth.currentUser.emailVerified == false && CurrentUser)
        toast.warn("Verify Email first!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    } else {
      toast.warn("Login first!", {
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
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
          center
          // closeIcon={close}
        >
          <div className="event-details">
            <h1 className="event-heading">STARTUP EXPO</h1>
            <div className="draft">
              <div className="options">
                <div onClick={() => changeDetail("description")}>
                  DESCRIPTION
                </div>
                <div onClick={() => changeDetail("format")}>FORMAT</div>
                <div onClick={() => changeDetail("evaluation")}>EVALUATION</div>
                <div onClick={() => changeDetail("rules")}>RULES</div>
                <div onClick={() => changeDetail("sponsors")}>SPONSORS</div>
              </div>
              <div className="option-content">
                {detail == "description" ? draftDetails[0] : null}
                {detail == "format" ? draftDetails[1] : null}
                {detail == "evaluation" ? draftDetails[2] : null}
                {detail == "rules" ? draftDetails[3] : null}
                {detail == "sponsors" ? draftDetails[4] : null}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  CurrentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Card);
