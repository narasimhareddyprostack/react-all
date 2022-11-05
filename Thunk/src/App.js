import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import UserList from "./components/UserList";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux Thunk</a>
            </nav>

            <Provider store={store}>
                <UserList/>
            </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
