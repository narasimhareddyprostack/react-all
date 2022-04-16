import React from 'react'
import { fetchCustomersAction, } from '../../redux/User/user.action'
import { useDispatch, useSelector } from 'react-redux'
let UserList = () => {

    let dispatch = useDispatch();
    let userData = useSelector((state) => {
        return state.users
    })
    let getData = () => {
        // dispatch an action function 
        dispatch(fetchCustomersAction())

    }

    return <React.Fragment>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="btn btn-success" onClick={getData}>Get Data</div>
                    <table className="table table-dark bg-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>

                                <th>Email </th>
                                <th>City</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.users.length > 0 ? <>{userData.users.map((user) => {
                                    return <tr><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
                                        <td>{user.address.city}</td><td>{user.website}</td>
                                    </tr>
                                })}</> : null
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </React.Fragment>
}
export default UserList