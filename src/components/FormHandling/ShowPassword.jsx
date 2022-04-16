import React, { Component } from "react";

class ShowPassword extends Component {
  state = {
    inputType: "password",
  };
  changeHanlder = () => {
    this.setState({ inputType: "text" });
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>Show Password</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            onChange={this.changeHanlder}
                          />
                        </div>
                      </div>
                      <input
                        type={this.state.inputType}
                        className="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPassword;
