import React from "react";

class WishCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-3">
                    <div className="card-body bg-success text-white">
                        <p className="h3">{this.props.msg}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default WishCard;
