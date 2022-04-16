import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../../../redux/Message/message.action";
let Message = () => {
  //read store data
  let messageData = useSelector((state) => {
    return state.message;
  });
  let dispacth = useDispatch();
  let gmHandler = () => {
    //dispatch an action
    dispacth(gmAction());
  };
  let gnHandler = () => {
    //dispatch an action
    dispacth(gnAction());
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Message : {messageData.message}</div>
              <div className="card-body">
                <button
                  type="submit"
                  className="btn btn-success mr-4"
                  onClick={gmHandler}
                >
                  Good Morning
                </button>
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={gnHandler}
                >
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default Message;
