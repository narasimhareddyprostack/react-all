import React, { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  let incrHanlder = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Counter : {counter}</div>
              <div className="card-body">
                <button className="btn btn-success" onClick={incrHanlder}>
                  Incr
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;

/*
state = {}

this.setState({})

*/
