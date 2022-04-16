import React, { useState } from "react";

let Message = () => {
  let [message, setMessage] = useState("Hello");
  let messageHandler = (msg) => {
    setMessage(msg);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Message : {message}</div>
              <div className="card-body">
                <button
                  className="btn btn-success m-2"
                  onClick={messageHandler.bind(this, "Good Moring")}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-primary"
                  onClick={messageHandler.bind(this, "Good Afternoon")}
                >
                  Good After
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
