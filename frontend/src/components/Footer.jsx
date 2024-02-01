import React from "react";
import "./Footer.css";

import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const style = { color: "white", fontSize: "6rem" };
  return (
    <div className="footer">
      <div>
        <a href="https://twitter.com/MaximSignoret" aria-label="Twitter">
          <FaXTwitter style={style} />
        </a>
        <a href="https://github.com/iNaeRoZ" aria-label="GitHub">
          <FaGithub style={style} />
        </a>
        <a
          href="https://www.instagram.com/maxim_signoret?igsh=ZG5qMDR5cmlyNmNn"
          aria-label="Instagram"
        >
          <FaInstagram style={style} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
