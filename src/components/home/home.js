import React from 'react';
import './home.css';
import bg from "./bg.mp4";
import {useState} from 'react';

const Home = (props) => {

    const [detail,setDetail] = useState('description'); 

    const changeDetail = (detail) =>{
        setDetail(detail);
    }

    const draftDetails = [
        "Startup Expo is an exhibition event for startup models. The viewers will get an opportunity to get exposure to a successfully implemented startup and business model from ideation to funding stage and get motivated to be a job creator. The participants will present the roadmap of their implemented startup and win a chance to get exciting prizes.",
        "Round1: Every Contestant needs to present the following points in front of judges and the audience. They need to elaborate each point within a 5-minute time span.",
        "The final score would be decided on 80/20 principle where 20 percent audience vote would be considered along with 80 percent of judges.",
        "1. The Jury can ask frequent questions anytime in between. And the participants need to respond in a very short and precise manner.\n 2. Contestant’s need to elaborate each point within a 5-minute time span.\n 3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.3. The decision of the judges will be final and shall be respected.",
        "Companies investing in startups, R&D’s, Investors, Startup building organizations, Incubation centers"
    ];

    return (
        <div className="home">
            {/* <div className="video">
                <video loop muted autoPlay className="video-inner">
                    <source src={bg} type="video/mp4"></source>
                </video>
            </div>
            <div className="logo-main">
                <div className="magnate-name">
                    <p>MAGNATE'21</p>
                    <p>EVOLUTION OF ENTREPRENEURSHIP</p>
                <div className="register-btn">
                    <a href="#" className="register-link">REGISTER</a>
                </div>
                </div>
            </div> */}
            <div className="event-details">
                <h1 className="event-heading">STARTUP EXPO</h1>
                <div className="draft">
                    <div className="options">
                        <div onClick={()=> changeDetail('description')}>DESCRIPTION</div>
                        <div onClick={()=> changeDetail('format')}>FORMAT</div>
                        <div onClick={()=> changeDetail('evaluation')}>EVALUATION</div>
                        <div onClick={()=> changeDetail('rules')}>RULES</div>
                        <div onClick={()=> changeDetail('sponsors')}>SPONSORS</div>
                    </div>
                    <div className="option-content">
                        {detail=="description" ? draftDetails[0] : null}
                        {detail=="format" ? draftDetails[1] : null}
                        {detail=="evaluation" ? draftDetails[2] : null}
                        {detail=="rules" ? draftDetails[3] : null}
                        {detail=="sponsors" ? draftDetails[4] : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;