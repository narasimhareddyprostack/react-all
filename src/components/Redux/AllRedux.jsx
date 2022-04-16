import React from "react";
import Counter from "./Counter/Counter";
import Message from "./Message/Message";
import Product from "./Product/Product";
function AllRedux() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Counter />
          </div>
          <div className="col-md-6">
            <Message />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllRedux;
