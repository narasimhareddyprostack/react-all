import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            React - Page
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/component" className="nav-link">
                  Component
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/props" className="nav-link">
                  Props
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/state" className="nav-link">
                  State
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/state" className="nav-link">
                  Event Binding
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/forms" className="nav-link">
                  Form Handling
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/life" className="nav-link">
                  Life Cycle Methods
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hooks" className="nav-link">
                  Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/redux" className="nav-link">
                  Redux
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/content" className="nav-link">
                  Content
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ref" className="nav-link">
                  useRef Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reducer" className="nav-link">
                  useReducer
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/registration" className="nav-link">
                  Form Handling
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/thunk" className="nav-link">
                  React Thunk
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/et" className="nav-link">
                  ET
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
