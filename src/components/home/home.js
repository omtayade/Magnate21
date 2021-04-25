import React from 'react';
import './home.css';
import bg from "./bg.mp4";
import {useState} from 'react';

const Home = (props) => {

    const [detail,setDetail] = useState('description'); 

    const changeDetail = (detail) =>{
        setDetail(detail);
    }

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
                <ol className="options-list">
                    <li onClick={()=> changeDetail('description')}>description</li>
                    <li onClick={()=> changeDetail('mode')}>mode</li>
                    <li onClick={()=> changeDetail('method')}>method</li>
                    <li onClick={()=> changeDetail('rules')}>rules</li>
                    <li onClick={()=> changeDetail('sponsors')}>sponsors</li>
                </ol>
                <div className="event-content">
                    {detail==='description' ? <p>description</p> :null}
                    {detail==='mode' ? <p>mode</p> :null}
                    {detail==='method' ? <p>method</p> :null}
                    {detail==='rules' ? <p>rules</p> :null}
                    {detail==='sponsors' ? <p>sponsors</p> :null}
                </div>
            </div>
        </div>
    )
}

export default Home;