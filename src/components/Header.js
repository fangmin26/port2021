import React from "react";
import { Link } from "react-router-dom";

const Header =()=> {
  const Lists = (path,param) =>{
    return(
      <>
      {param==="signin"?
        <li className="border-r border-[#e8e8e8] text-center transition duration-150 ease-linear flex">
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
        :
        <li className="border-r border-[#e8e8e8] text-center transition duration-150 ease-linear">
          <Link to={path}>{param}</Link>
        </li>
    }
      </>

    );
  };
  return (
    <>
      <div id="ham" className="hidden fixed z-[1002] top-[50px] right-[30px] w-[35px] h-[28px] cursor-pointer">
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
      <header id="header" className="fixed z-[1000] left-0 top-[-200px] w-full border-b border-[#e8e8e8] backdrop-blur-md">
        <nav class="nav">
          <ul className ="flex items-center">
            {Lists("/","Portfolio")}
            {Lists("/","About")}
            {Lists("/website","Website")}
            {Lists("/css","Css")}
            {Lists("/board","Board")}  
            {Lists("/contact","Contact")}  
            {Lists("signin","signin")}  
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
