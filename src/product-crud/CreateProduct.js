import React from "react";
import Axios from "axios";
import {Redirect} from 'react-router-dom';

class CreateProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
                name : '',
                image : '',
                price : '',
                qty : '',
                info : ''
            },
            isSubmitted : false,
            errorMessage : ''
        };
    }

    // changeInput
    changeInput = (event) => {
        this.setState({
            product : {
                ...this.state.product,
                [event.target.name] : event.target.value
            }
        });
    };

    // changeImage
    changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await this.base64Image(imageFile);
        this.setState({
            product : {
                ...this.state.product,
                image : base64Image
            },
            isSubmitted : false,
            errorMessage : ''
        });
    };

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
        let dataURL = `http://127.0.0.1:5000/api/products/`;
        Axios.post(dataURL, this.state.product).then((response) => {
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
                    this.state.isSubmitted ? <Redirect to="/admin"/> :

                        <div className="container mt-3">
                            <div className="row animated slideInLeft">
                                <div className="col">
                                    <p className="h3 text-success">Create a Product</p>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                                        in placeat? Aperiam aspernatur aut doloribus, est fugiat harum impedit molestias
                                        non nulla perferendis, porro quae veniam veritatis voluptas voluptate
                                        voluptates.</p>
                                </div>
                            </div>
                            <div className="row animated flipInY delay-1s">
                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            <p className="h4">Create Product</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.submitProduct}>
                                                <div className="form-group">
                                                    <input required
                                                           name="name"
                                                           value={this.state.product.name}
                                                           onChange={this.changeInput}
                                                           type="text" className="form-control"
                                                           placeholder="Product Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-file">
                                                        <input required
                                                               onChange={this.changeImage}
                                                               type="file" className="custom-file-input"
                                                               id="customFile"/>
                                                        <label className="custom-file-label" htmlFor="customFile">Product
                                                            Image</label>
                                                        {
                                                            this.state.product.image &&
                                                            <img src={this.state.product.image} alt="" width="20"
                                                                 height="20"/>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input required
                                                           name="price"
                                                           value={this.state.product.price}
                                                           onChange={this.changeInput}
                                                           type="number" className="form-control" placeholder="Price"/>
                                                </div>
                                                <div className="form-group">
                                                    <input required
                                                           name="qty"
                                                           value={this.state.product.qty}
                                                           onChange={this.changeInput}
                                                           type="number" className="form-control"
                                                           placeholder="Available Qty"/>
                                                </div>
                                                <div className="form-group">
                                            <textarea required
                                                      name="info"
                                                      value={this.state.product.info}
                                                      onChange={this.changeInput}
                                                      className="form-control" rows="3" placeholder="General Info"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-dark btn-sm"
                                                           value="Create Product"/>
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
export default CreateProduct;
