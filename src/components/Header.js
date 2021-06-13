import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="ham">
        <span className="firstbar"></span>
        <span className="secondbar"></span>
        <span className="thirdbar"></span>
      </div>
      <div id="hamLIST">
        <ul>
          <li>
            <Link to="/" className="page__click">
              About
            </Link>
          </li>
          <li>
            <Link to="/website" className="page__click">
              Website
            </Link>
          </li>
          <li>
            <Link to="/css" className="page__click">
              Css
            </Link>
          </li>
          <li>
            <Link to="/javascript" className="page__click">
              Javascript
            </Link>
          </li>
          <li>
            <Link to="/board" className="page__click3">
              Board
            </Link>
          </li>
          <li>
            <span>
              <Link to="/signin" className="page__click2">
                SignIn
              </Link>
            </span>
            <span>
              <Link to="/login" className="page__click2">
                LogIn
              </Link>
            </span>
            <span>
              <Link to="/contact" className="page__click">
                Contact
              </Link>
            </span>
          </li>
        </ul>
      </div>

      <header id="header">
        <nav class="nav">
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/" className="page__click">
                About
              </Link>
            </li>
            <li>
              <Link to="/website" className="page__click">
                Website
              </Link>
            </li>
            <li>
              <Link to="/css" className="page__click">
                Css
              </Link>
            </li>
            <li>
              <Link to="/javascript" className="page__click">
                Javascript
              </Link>
            </li>
            <li>
              <Link to="/board" className="page__click3">
                Board
              </Link>
            </li>
            <li>
              <span>
                <Link to="/signin" className="page__click2">
                  SignIn
                </Link>
              </span>
              <span>
                <Link to="/login" className="page__click2">
                  LogIn
                </Link>
              </span>
              <span>
                <Link to="/contact" className="page__click">
                  Contact
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
