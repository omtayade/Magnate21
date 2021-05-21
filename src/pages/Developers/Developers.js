import React from "react";
import DevCard from "./DevCard";
import "./Developers.css";
import MayurDP from "./assets/MayurDP.jpeg";
import OmDP from "./assets/OmDP.jpg";
import JashDP from "./assets/JashDP.jpg";

export default function Developers() {
  return (
    <div className="container">
      <div className="title">Developers</div>
      <div className="first__child">
        <DevCard
          picture={OmDP}
          name={"Om Tayade"}
          linkedIn={"https://www.linkedin.com/in/om-tayade-6654921a9"}
          github={"https://github.com/omtayade"}
          mail={"https://omtayade160901@gmail.com"}
        />
        <DevCard
          picture={MayurDP}
          name={"Mayur Jain"}
          linkedIn={"https://www.linkedin.com/in/mayur-jain-904982191"}
          github={"https://github.com/maxcharge"}
          mail={"https://maxcharge788769@gmail.com"}
        />
        <DevCard
          picture={null}
          name={"Amit Purohit"}
          linkedIn={"https://www.linkedin.com/in/mayur-jain-904982191"}
          github={"https://github.com/maxcharge"}
          mail={"https://maxcharge788769@gmail.com"}
        />
      </div>
      <div className="second__child">
        <DevCard
          picture={JashDP}
          name={"Jash Shah"}
          linkedIn={"https://www.linkedin.com/in/jashshah-2103/"}
          github={"https://github.com/jashshah-2103"}
          mail={"https://maxcharge788769@gmail.com"}
        />

        <DevCard
          picture={null}
          name={"Amit Shinde"}
          linkedIn={"https://www.linkedin.com/in/mayur-jain-904982191"}
          github={"https://github.com/maxcharge"}
          mail={"https://maxcharge788769@gmail.com"}
        />
      </div>
    </div>
  );
}
