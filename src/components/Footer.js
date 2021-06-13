import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <ul className="study">
            <li>
              <Link to="https://maggie-a.tistory.com/">Blog</Link>
            </li>
            <li>
              <Link to="https://app.gitbook.com/@fangmin226/s/javascript/">
                Gitbook
              </Link>
            </li>
          </ul>
          <span>ContactOn &#123;01029693106 : Hwang Minji&#125;</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
