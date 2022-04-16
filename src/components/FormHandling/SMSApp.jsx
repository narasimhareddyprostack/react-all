import React, { Component, Fragment } from "react";

class SMSApp extends Component {
  state = {
    count: 100,
  };
  inputHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.value.length);
    this.setState({
      count: 100 - event.target.value.length,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-warning">
                  <h3> SMS Application</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <textarea
                        rows="4"
                        maxLength="100"
                        className="form-control"
                        onChange={this.inputHandler}
                      ></textarea>
                    </div>
                    <p className="h4">Remaining Chars:{this.state.count}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SMSApp;
