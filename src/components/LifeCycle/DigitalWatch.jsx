import React from "react";

class DigitalWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  // when the component is fully loaded
  componentDidMount() {
    console.log("Birth")
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  // this will execute,  when the component is removed from the DOM
  componentWillUnmount() {
    console.log("Death..Try Again")
    clearInterval(this.timer); // clearing the timer
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card text-center">
                <div className="card-header bg-primary text-white">
                  <p className="h4">Digital Watch - Class </p>
                </div>
                <div className="card-body">
                  <h3 className="display-3">{this.state.currentTime}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default DigitalWatch;
