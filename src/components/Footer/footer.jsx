import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.handleScrollToStats = this.handleScrollToStats.bind(this);
    }

    handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
        return (
            <div className="footer">

                <div className="button-top">
                    <Button outline onClick={this.handleScrollToStats} style={{ color: "#f09103" }}><h2>Back To Top</h2></Button>
                </div>

                <div className="footer-content">
                    <div className="quicklinks">
                        <h2 style={{ color: "grey" }}>Quick-Links</h2>
                        <a href="/events" ><h4 >Events</h4></a>
                        <a href="/sponsers" ><h4 >Sponsers</h4></a>
                    </div>
                    
                    <div className="contact">
                        <h2 style={{ color: "grey"  }}>Contact Us</h2>
                        <i className="fa fa-envelope fa-lg" /><br />
                        <h4>{"  "}edc.pict@gmail.com</h4>
                        <i className="fa fa-phone fa-lg" /><br />
                            <h4>Rahul Shinde - 9876543210</h4>
                            <h4>Rahul Shinde - 9876543210</h4>
                        <div className="social-icons" >
                            <a href="www.facebook.com">
                                <i className="fa fa-facebook fa-md "></i>
                            </a>
                            <a href="www.instagram.com">
                                <i className="fa fa-instagram fa-md"></i>
                            </a><br/>
                            <a href="www.linkedin.com">
                                <i className="fa fa-linkedin fa-md"></i>
                            </a>
                            <a href="www.youtube.com">
                                <i className="fa fa-youtube fa-md"></i>
                            </a>
                        </div>
                    </div>

                    <div className="address">
                        <h2 style={{ color: "grey" }}>Address</h2>
                        <i className="fa fa-map-marker fa-md" />
                        <h4>Pune Institute of Computer Technology,</h4>
                        <h4>Behind Bharati Vidyapeeth University,</h4>
                        <h4 >Dhankawadi, Pune,</h4>
                        <h4 >Maharashtra-411043</h4>
                    </div>

                </div>
                
                <div className="end">
                    <div className="copyright">
                        &copy; PICT-EDC, Designed & Developed with &hearts; by PICT-EDC Web Team.
                    </div>
                    <div className="message">
                        <p style={{ color: "#f09103" }}>IDEATE - INNOVATE - INCUBATE</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default Footer;