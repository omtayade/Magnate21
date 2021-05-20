import React from 'react';
import './aboutus.css';
import img1 from '../../assets/img1.gif';
import {Redirect} from 'react-router-dom'
import Footer from '../../components/Footer/footer';
const AboutUs = () =>{
    

    return(
       

    <div className="aboutus">
        <div className="magnate-theme">
            <h1>THEME</h1>
            <p>EVOLUTION of ENTREPRENEURSHIP</p>
        </div>
        <div className="about-magnate">
            <h1>ABOUT MAGNATE'21</h1>
            <div className="about-magnate-container">
                <div className="about-magnate-content">
                    The event is especially well recognized for the variety of panel discussions, competitive events,
                    entrepreneurial opportunities, and the prominent and thought evoking speaker sessions that we
                    host. MAGNATE’21 has a plethora of opportunities for all the entrepreneurship, start-ups,
                    businesses, finance, marketing, and trading enthusiasts. The event will provide all the people from
                    diverse backgrounds an opportunity to come together, compete, and share their entrepreneurial
                    aspirations and experiences and get the right direction for their endeavors.
                </div>
                <div className="about-magnate-svg">
                    <img src={img1} style={{width:'90%',height:"90%",borderRadius:"10px"}}></img>
                </div>
            </div>
            <div className="about-edc">
                <h1>ABOUT EDC</h1>
                <div className="about-edc-container">
                    <div className="about-edc-svg">
                        <img src={img1} style={{width:'90%',height:"90%",borderRadius:"10px"}}></img>
                    </div>
                    <div className="about-edc-content">
                        Entrepreneurship Development Cell, PICT firmly believes that India needs the drive and innovation of the young entrepreneurs.
                        EDC therefore aims at manifesting the latent Entrepreneurial spirit of the youth.
                        EDC was established by the college students, alumni, industry, and faculty,
                        towards the cause of producing quality leaders who contribute to the growth and development of mankind.
                        EDC was inaugurated on 4th march , 2009.
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  


);
}
export default AboutUs;