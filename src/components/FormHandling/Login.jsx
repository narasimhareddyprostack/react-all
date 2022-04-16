import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  //extract and copy - .... duty and update required property
  let updateHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    alert(JSON.stringify(user));
    event.preventDefault();
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h4"> Login</p>
                <pre>{JSON.stringify(user)}</pre>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
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
    </>
  );
};
export default Login;
