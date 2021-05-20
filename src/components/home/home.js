import { useEffect, useState, useRef } from "react";
import "./home.css";
import DOTS from "./vanta.dots.min.js";

import linkedin from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scaleMobile: 1.0,
          size: 2.9,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ height: "100vh", width: "100vw" }} ref={myRef}>
      <div className="home">
        <div className="logo-main">
          <div className="side-social">
            <div className="instagram">
              <a href="/" target="_blank">
                <p className="social-inner">
                  <i className="fab fa-instagram"></i>
                  Follow us @pictedc
                </p>
              </a>
            </div>
            <div className="linkedin">
              <a href="/" target="_blank">
                <p className="social-inner">
                  <i className="fab fa-linkedin-in"></i>
                  Connect Pict EDC
                </p>
              </a>
            </div>
            <div className="youtube">
              <a href="/" target="_blank">
                <p className="social-inner">
                  <i className="fab fa-youtube"></i>
                  Subscribe Pict EDC
                </p>
              </a>
            </div>
          </div>
          <div className="magnate-name">
            <p>MAGNATE'21</p>
            <p>EVOLUTION OF ENTREPRENEURSHIP</p>
            <div className="register-btn">
              <Link to="/events" className="register-link">
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
