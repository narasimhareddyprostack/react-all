import React, { useState } from "react";

let Registration = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  let updateHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    console.log(user);
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h4"> Registration</p>
                <pre>{JSON.stringify(user)}</pre>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      onChange={updateHandler}
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={updateHandler}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="password"
                      onChange={updateHandler}
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      onChange={updateHandler}
                      name="mobile"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="form-control btn btn-primary"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registration;
