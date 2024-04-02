import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import ProductAdmin from "./components/products/ProductAdmin";
import CreateProduct from "./components/products/CreateProduct";
import UpdateProduct from "./components/products/UpdateProduct";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/products' component={ProductList}/>
                        <Route exact path='/admin' component={ProductAdmin}/>
                        <Route exact path='/create-product' component={CreateProduct}/>
                        <Route exact path='/update-product/:id' component={UpdateProduct}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}
export default App;
