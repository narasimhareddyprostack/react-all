import React from "react";
import { incrAction, decrAction } from "../../../redux/Counter/counter.action";
import { useDispatch, useSelector } from "react-redux";
let Counter = () => {
  let disaptch = useDispatch();
  let counterData = useSelector((state) => {
    return state.counter;
  });
  let incrHander = () => {
    disaptch(incrAction());
  };
  let decrHander = () => {
    disaptch(decrAction());
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">Counter:{counterData.counter}</div>
              <pre>{JSON.stringify(counterData)}</pre>
              <div className="card-body">
                <button
                  type="submit"
                  className="btn btn-success mr-4"
                  onClick={incrHander}
                >
                  Incr
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={decrHander}
                >
                  Decr
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

export default Counter;
