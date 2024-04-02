import React from "react";
import Axios from "axios";

class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            errorMessage : ''
        }
    }


    componentDidMount() {
        let dataURL = `http://127.0.0.1:5000/api/products`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                products : response.data
            });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row animated slideInLeft">
                        <div className="col">
                            <p className="h3 text-success">Products Page</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt officiis perspiciatis quam voluptate. Alias consequuntur est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem doloribus illo nihil odit veniam.</p>
                        </div>
                    </div>
                    <div className="row animated zoomIn delay-1s">
                        {
                            this.state.products.length > 0 ?
                                <React.Fragment>
                                    {
                                        this.state.products.map((product) => {
                                            return (
                                                <div className="col-md-3">
                                                    <div className="card">
                                                        <div className="card-header text-center bg-white">
                                                            <img src={product.image} alt="" width="150" height="150"/>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-group">
                                                                <li className="list-group-item">
                                                                    Name : {product.name}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Price : &#8377; {product.price.toFixed(2)}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    Qty : {product.qty} Kgs
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ProductList;
