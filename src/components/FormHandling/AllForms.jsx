import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import ShowPassword from "./ShowPassword";
import SMSApp from "./SMSApp";
function AllForms() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Login />
          </div>
          <div className="col-md-6">
            <Registration />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ShowPassword />
          </div>
          <div className="col-md-6">
            <SMSApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllForms;
