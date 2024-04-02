import React from "react";
import {Link} from 'react-router-dom';
import Axios from "axios";

class ProductAdmin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    // get all products
    getProducts = () => {
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
    };

    // deleteProduct
    deleteProduct = (productId) => {
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.delete(dataURL).then((response) => {
            this.getProducts();
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row animated slideInLeft">
                        <div className="col">
                            <p className="h3 text-success">Products Details</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt officiis perspiciatis quam voluptate. Alias consequuntur est ipsam iure modi mollitia placeat, ut voluptatem? Dolorem doloribus illo nihil odit veniam.</p>
                            <Link to="/create-product" className="btn btn-success btn-sm">Create Product</Link>
                        </div>
                    </div>
                    <div className="row mt-3 animated zoomIn delay-1s">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-success">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                       this.state.products.length > 0 ?
                                           <React.Fragment>
                                               {
                                                   this.state.products.map((product) => {
                                                       return (
                                                           <tr>
                                                               <td>{product._id.substr(product._id.length - 4)}</td>
                                                               <td>
                                                                   <img src={product.image} alt="" width="70" height="70"/>
                                                               </td>
                                                               <td>{product.name}</td>
                                                               <td>&#8377;{product.price.toFixed(2)}</td>
                                                               <td>{product.qty} Kgs</td>
                                                               <td>
                                                                   <Link to={`/update-product/${product._id}`} className="btn btn-secondary btn-sm text-white">Update</Link>
                                                                   <button onClick={this.deleteProduct.bind(this, product._id)} className="btn btn-danger btn-sm text-white">Delete</button>
                                                               </td>
                                                           </tr>
                                                       )
                                                   })
                                               }
                                           </React.Fragment> : <React.Fragment>
                                            <tr>
                                                <td colSpan="6" className="text-danger font-weight-bold">------------- No Products Available ------------ </td>
                                            </tr>
                                           </React.Fragment>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ProductAdmin;
