import React from "react";

function Loader() {
  return (
    <div className="loader loader--active">
      <div className="loader__icon">
        <div id="loading-rotater">
          <svg id="loading-svg" width="50" height="50" fill="transparent">
            <circle cx="25" cy="25" r="24" stroke="white"></circle>
          </svg>
        </div>
      </div>
      <div className="loader__tile"></div>
      <div className="loader__tile"></div>
      <div className="loader__tile"></div>
      <div className="loader__tile"></div>
      <div className="loader__tile"></div>
    </div>
  );
}

export default Loader;
