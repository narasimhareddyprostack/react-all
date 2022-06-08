import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import StudentCart from "./components/Props/StudentCard";
import AllHook from "./components/Hooks/AllHook";
import AllForms from "./components/FormHandling/AllForms";
import All from "./components/LifeCycle/All";
import ContactApp from "./components/ContactList/ContactApp";
import AllRedux from "./components/Redux/AllRedux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Search from './components/Search/Search'
import EApp from './components/ET/EApp'
import Reader from "./components/PDFReader/Reader";
import Register from './components/Hooks/Register'
import MessageOne from './components/Hooks/MessageReducer/MessageOne'
import Registration from './components/Registration/Registration'
import UserList from './components/Users/UserList'
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/component" component={StudentCart} />
              <Route exact path="/forms" component={AllForms} />
              <Route exact path="/hooks" component={AllHook} />
              <Route exact path="/ref" component={Register} />
              <Route exact path="/reducer" component={MessageOne} />
              <Route exact path="/life" component={All} />
              <Route exact path="/contact" component={ContactApp} />
              <Route exact path="/redux" component={AllRedux} />
              <Route exact path="/content" component={Reader} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/thunk" component={UserList}></Route>
              <Route exact path="/registration" component={Registration}></Route>
              <Route exact path="/et" component={EApp}></Route>
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
