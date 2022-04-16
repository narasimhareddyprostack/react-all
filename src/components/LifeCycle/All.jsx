import React from "react";
import DigitalWatch from "./DigitalWatch";
import Digital from "./Digital";

function All() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <DigitalWatch />
          </div>
          <div className="col-md-6">
            <Digital />
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
