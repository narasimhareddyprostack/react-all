import React from "react";

class StudentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        image:
          "data:image/jpeg;base64,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",
        name: "Arjun Reddy",
        age: 20,
        course: "MBBS",
        college: "Mangalore Medical College",
        hobbies: ["Cricket", "Tennis"],
      },
    };
  }

  render() {
    let { image, name, age, college, course, hobbies } = this.state.student;
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={image} />
                <div className="card-body">
                  <span className="h4">{name}</span>
                  <br />
                  <span className="h5">{age} Yrs</span>
                  <br />
                  <span className="h6">Course:{course}</span>
                  <br />
                  <span className="text-decoration-underline">{college}</span>
                  <br />
                  <ul>
                    <li>{hobbies[0]}</li>
                    <li>{hobbies[1]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default StudentCard;
