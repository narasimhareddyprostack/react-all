import React, { Component } from "react";
import Axios from "axios";
import ContactCard from "./ContactCard";

class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
    };
  }
  componentDidMount() {
    let dataUrl =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(dataUrl)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getContactData = (contact) => {
    this.setState({
      selectedContact: contact,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.length > 0 ? (
                    <React.Fragment>
                      {this.state.contacts.map((contact) => {
                        return (
                          <tr
                            key={contact.email}
                            onMouseOver={this.getContactData.bind(this, contact)}
                          >
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              {Object.keys(this.state.selectedContact).length > 0 ? (
                <>
                  <ContactCard contact={this.state.selectedContact} />
                </>
              ) : null}
            </div>
          </div>
        </div>
        {/*  <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
      </React.Fragment>
    );
  }
}

export default ContactApp;
