import React, {useState} from "react";
import {registerUSerAction} from '../../redux/User/register.action'
import {useDispatch,useSelector} from 'react-redux'
let Registration = () => {
    let dispatch = useDispatch();
    let [user , setUser] = useState({
        register : {
            username : '',
            password : '',
            email : '',
            terms : false
        }
    });

    // for username , email , password onchange
    let updateInput = (e) => {
        setUser({
            register : {
                ...user.register,
                [e.target.name] : e.target.value
            }
        });
    };

    // for checkbox onchange
    let updateCheck = (e) => {
        setUser({
            register : {
                ...user.register,
                [e.target.name] : e.target.checked
            }
        });
    };

    // register form submission
    let register = (e) => {
        e.preventDefault();
        dispatch(registerUSerAction(user.register))
        console.log(user.register);
    };

    return(
        <React.Fragment>
           {/*   <pre>{JSON.stringify(user)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Register Here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={register}>
                                    <div className="form-group">
                                        <input
                                            name="username"
                                            value={user.register.username}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="email"
                                            value={user.register.email}
                                            onChange={updateInput}
                                            type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            value={user.register.password}
                                            onChange={updateInput}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            name="terms"
                                            onChange={updateCheck}
                                            className="form-check-input" type="checkbox" id="defaultCheck1"/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Accept Terms & Conditions
                                            </label>
                                    </div>
                                    <div>
                                        <input type="submit" value="Register" className="btn btn-secondary btn-sm"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Registration;
