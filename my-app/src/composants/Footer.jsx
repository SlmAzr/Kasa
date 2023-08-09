import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerlogo">
        <img src="logo-b.png" alt="logo" width={100} />
      </div>
      <div className="footertxt">© 2020 Kasa. All right reserved</div>
    </div>
  );
}

export default Footer;
