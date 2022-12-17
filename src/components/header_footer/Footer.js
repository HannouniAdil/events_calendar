import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade>
        <div>
          <div className="font_righteous footer_logo_venue">The Venue</div>
          <div className="footer_copyright">
            The venu 2022 all rights reserved
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
