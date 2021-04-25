import React from 'react';
import './home.css';
import bg from "./bg.mp4";

const home = (props) => {
    return (
        <div className="home">
            <div className="video">
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
            </div>
        </div>
    )
}

export default home;