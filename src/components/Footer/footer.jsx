import React,{Component} from 'react';
import { Button } from 'reactstrap';
import './footer.css';

class Footer extends Component {

    constructor(props){
        super(props);
        this.handleScrollToStats=this.handleScrollToStats.bind(this);
    }
    
    handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
   }

   render(){
    return(
        <div className="footer">
            <div className="container">
                 
                    <div className="button-top">
                        <Button outline onClick={this.handleScrollToStats} style={{color:"#f09103"}}>Back To Top</Button>
                    </div>
                

                <div className="row" >
                    <div className="col-12 align-self-center">
                        <div className="text-center">
                        <a href="www.facebook.com">
                            <i className="fa fa-facebook-square" style={{fontSize:"2em"}}></i>
                        </a>
                        <a href="www.instagram.com">
                            <i className="fa fa-instagram" style={{fontSize:"2em"}}></i>
                        </a>
                        <a href="www.linkedin.com">
                            <i className="fa fa-linkedin" style={{fontSize:"2em"}}></i>
                        </a>
                        <a href="www.youtube.com">
                            <i className="fa fa-youtube" style={{fontSize:"2em"}}></i>
                        </a>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 text-center quicklinks">
                        <h5 style={{color:"grey"}}>Quick Links</h5>
                        <a href="/events">events</a><br/>
                        <a href="/sponsers">sponsers</a><br/>
                    </div>
                    <div className="logos col-4 text-center">
                        <img src="images/magnate21.png" alt="MAGNATE21" />
                        <p style={{color:"grey",paddingTop:"1em"}}>Organised by</p>
                        <img src="images/edc.png" alt="EDCPICT" />
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <h5 style={{color:"white"}}>Contact Us</h5>
                            <address>
                              <i className="fa fa-phone fa-lg" style={{color:"white"}}>  fdsl flkjs : </i><a style={{textDecoration:"none"}} href="callto:+852 1234 5678"><h5>+852 1234 5678</h5></a><br />
                              <i className="fa fa-phone fa-lg" style={{color:"white"}}>  fdsl flkjs : </i><a style={{textDecoration:"none"}} href="callto:+852 1234 5678"><h5>+852 1234 5678</h5></a><br />
                            </address>
                        </div>    
                    </div>
                </div>  
    
                    
                
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p className="text-center" style={{color:"#f09103"}}>©PICT EDC, MAGNATE21</p>
                        <p className="text-center" style={{color:"#f09103"}}>IDEATE - INNOVATE - INCUBATE</p>
                    </div>
                </div>
    
                
            </div>
        </div>
        );
   }
    
}

export default Footer;