import React from "react";
import Axios from "axios";
import {Redirect} from 'react-router-dom';

class UpdateProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct : {
                name : '',
                image : '',
                price : '',
                qty : '',
                info : ''
            },
            errorMessage : ''
        }
    }

    componentDidMount() {
        let prodId =  this.props.match.params.id;
        let dataURL = `http://127.0.0.1:5000/api/products/${prodId}`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                selectedProduct : response.data
            });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    }

    // changeInput
    changeInput = (event) => {
        this.setState({
            selectedProduct : {
                ...this.state.selectedProduct,
                [event.target.name] : event.target.value
            }
        });
    };

    // changeImage
    changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await this.base64Image(imageFile);
        this.setState({
            selectedProduct : {
                ...this.state.selectedProduct,
                image : base64Image
            }
        });
    };

    // get the base64 string of the image
    base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.addEventListener('load', () => {
                if(reader.result){
                    resolve(reader.result);
                }
                else {
                    reject('Error Occured');
                }
            });
        });
    };


    // submitProduct
    submitProduct = (event) => {
        event.preventDefault();
        let dataURL = `http://127.0.0.1:5000/api/products/${this.state.selectedProduct._id}`;
        Axios.put(dataURL, this.state.selectedProduct).then((response) => {
            this.setState({
                isSubmitted : true
            });
        }).catch((err) => {
            this.setState({
                errorMessage : err
            });
        });
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isSubmitted ? <Redirect to='/admin'/> :

                        <div className="container mt-3">
                            <div className="row animated slideInLeft">
                                <div className="col">
                                    <p className="h3 text-secondary">Update a Product</p>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusamus corporis cumque, debitis, delectus dignissimos distinctio expedita
                                        facere fugiat harum id iure, minus neque nesciunt odit officia perferendis porro
                                        tempora ullam.</p>
                                </div>
                            </div>
                            <div className="row animated flipInY delay-1s">
                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h4">Update Product</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.submitProduct}>
                                                <div className="form-group">
                                                    <input
                                                        name="name"
                                                        value={this.state.selectedProduct.name}
                                                        onChange={this.changeInput}
                                                        type="text" className="form-control" placeholder="Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-file">
                                                        <input
                                                            onChange={this.changeImage}
                                                            type="file" className="custom-file-input" id="customFile"/>
                                                        <label className="custom-file-label" htmlFor="customFile">Product
                                                            Image</label>
                                                        {
                                                            this.state.selectedProduct.image &&
                                                            <img src={this.state.selectedProduct.image} alt=""
                                                                 width="20" height="20"/>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name="price"
                                                        value={this.state.selectedProduct.price}
                                                        onChange={this.changeInput}
                                                        type="number" className="form-control" placeholder="Price"/>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name="qty"
                                                        value={this.state.selectedProduct.qty}
                                                        onChange={this.changeInput}
                                                        type="number" className="form-control" placeholder="qty"/>
                                                </div>
                                                <div className="form-group">
                                           <textarea
                                               name="info"
                                               value={this.state.selectedProduct.info}
                                               onChange={this.changeInput}
                                               className="form-control" rows="3" placeholder="General Info"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-secondary btn-sm"
                                                           value="Update Product"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <div style={{marginBottom : '100px'}}/>
            </React.Fragment>
        );
    }
}
export default UpdateProduct;
