import React, { useReducer } from 'react'
let initialState = {
    message: "Hello"
}
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'gm':
            return { message: "Good Monring" }
        case 'ga':
            return { message: "Good Afternoon" }
        case 'gn':
            return { message: "Good Night" }
        default:
            return state
    }

}  // reducer function is resposible to modify the state/state mgmt
//  how to trigger an action>

let MessageOne = () => {
    //let [state, setState] =useState(initialState)
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            useReducer Hook Example
            </div>
                        <div className="card-header">
                            {state.message}
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success mr-3" onClick={() => { dispatch({ type: "gm" }) }}>GM</button>
                            <button className="btn btn-primary mr-3" onClick={() => { dispatch({ type: "ga" }) }}>GA</button>
                            <button className="btn btn-secondary" onClick={() => { dispatch({ type: "gn" }) }}>GN</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default MessageOne
