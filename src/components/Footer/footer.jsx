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
                    <Button outline onClick={this.handleScrollToStats} style={{ color: "#f09103" }}>Back To Top</Button>
                </div>

                

                <div className="footer-content">
                    <div className="quick-links">
                        <h5 style={{ color: "grey" }}>Quick Links</h5>
                        <a href="/events">events</a>
                        <a href="/sponsers">sponsers</a>
                    </div>
                    <div className="logos">
                        <img src="images/magnate21.png" alt="MAGNATE21" />
                        <p style={{ color: "grey", paddingTop: "1em",marginLeft:"15%" }}>Organised by</p>
                        <img src="images/edc.png" alt="EDCPICT" />
                    </div>
                    <div className="contact">
                        <h5 style={{ color: "grey" }}>Contact Us</h5>
                        <address>
                            <i className="fa fa-phone fa-lg" >  fdsl flkjs : </i><br/><a  href="callto:+852 1234 5678">+852 1234 5678</a><br />
                            <i className="fa fa-phone fa-lg" >  fdsl flkjs : </i><br/><a  href="callto:+852 1234 5678">+852 1234 5678</a><br />
                        </address>
                    </div>
                </div>

                <div className="end">
                    <div className="copyright">
                        <p style={{ color: "#f09103" }}>©PICT EDC, MAGNATE21</p>
                    </div>
                    <div className="message">
                        <p style={{ color: "#f09103" }}>IDEATE - INNOVATE - INCUBATE</p>
                    </div>
                </div>

                <div className="social-icons" >
                    <a href="www.facebook.com">
                        <i className="fab fa-facebook" style={{ fontSize: "2em" }}></i>
                    </a>
                    <a href="www.instagram.com">
                        <i className="fab fa-instagram" style={{ fontSize: "2em" }}></i>
                    </a>
                    <a href="www.linkedin.com">
                        <i className="fab fa-linkedin-in" style={{ fontSize: "2em" }}></i>
                    </a>
                    <a href="www.youtube.com">
                        <i className="fab fa-youtube" style={{ fontSize: "2em" }}></i>
                    </a>
                </div>

            </div>
        );
    }

}

export default Footer;