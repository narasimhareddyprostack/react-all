import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchCustomers} from "../redux/customers/customers.actions";
import {CUSTOMER_FEATURE_KEY} from "../redux/customers/customers.reducer";

let UserList = () => {
    let dispatch = useDispatch();

    // get data from the Redux Store
    let customerInfo = useSelector((state) => {
        return state[CUSTOMER_FEATURE_KEY];
    });

    // Dispatch an action to Redux to fetch the data
    let clickGetData = () => {
        dispatch(fetchCustomers());
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Users Information</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis deserunt dicta dolore hic ipsa iure laborum maiores mollitia necessitatibus nobis, odio omnis quae quas quasi quisquam reiciendis sapiente temporibus?</p>
                    </div>
                </div>
                <button onClick={clickGetData} className="btn btn-primary btn-sm">Get Data</button>
                <div className="row">
                    <div className="col">
                        <table className="table table-primary table-hover text-center table-striped">
                            <thead className="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customerInfo.customers.length > 0 ? <React.Fragment>
                                    {
                                        customerInfo.customers.map((user) => {
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default UserList;
