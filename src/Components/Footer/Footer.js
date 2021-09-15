import React from "react";
import "./Footer.scss";
import github from "../../Assets/github.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">

        <div className="footer__center"  
          onClick={() =>
            window.open(`https://github.com/scotlin1293/Capstone2-Netflix-Remake2`, "_blank")
          }
        >
          <img src={github} alt="github" className="footer__logo-github" />

          <h1 className="footer__text footer__link">View on Github</h1>
        </div>

     
      </div>
    </div>
  );
};

export default Footer;
