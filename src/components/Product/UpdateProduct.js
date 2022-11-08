import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import Axios from "axios";

let UpdateProduct = () => {
    let history = useHistory();
    let [productId , setProductId] = useState(useParams().id);
    let [selectedProduct , setSelectedProduct] = useState({
        name : '',
        image : '',
        price : '',
        qty : '',
        info : ''
    });
    let [submitted , setSubmitted] = useState(false);
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.get(dataURL).then((response) => {
            setSelectedProduct(response.data);
        }).catch((err) => {
            setErrorMessage(err);
        });
    }, [productId]);

    // changeInput
    let changeInput = (event) => {
        setSelectedProduct({
            ...selectedProduct,
            [event.target.name] : event.target.value
        });
    };

    // changeImage
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if(reader.result){
                setSelectedProduct({
                    ...selectedProduct,
                    image : reader.result
                });
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    // submitProduct
    let submitProduct = (event) => {
        event.preventDefault();
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.put(dataURL,selectedProduct).then((response) => {
            setSubmitted(true);
        }).catch((err) => {
            setErrorMessage(err);
        });
    };

    return(
        <React.Fragment>
            {
                submitted ? history.push('/admin') :

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
                                        <form onSubmit={submitProduct}>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={selectedProduct.name}
                                                    onChange={changeInput}
                                                    type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-file">
                                                    <input
                                                        onChange={changeImage}
                                                        type="file" className="custom-file-input" id="customFile"/>
                                                    <label className="custom-file-label" htmlFor="customFile">Product
                                                        Image</label>
                                                    {
                                                        selectedProduct.image &&
                                                        <img src={selectedProduct.image} alt=""
                                                             width="20" height="20"/>
                                                    }
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="price"
                                                    value={selectedProduct.price}
                                                    onChange={changeInput}
                                                    type="number" className="form-control" placeholder="Price"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="qty"
                                                    value={selectedProduct.qty}
                                                    onChange={changeInput}
                                                    type="number" className="form-control" placeholder="qty"/>
                                            </div>
                                            <div className="form-group">
                                           <textarea
                                               name="info"
                                               value={selectedProduct.info}
                                               onChange={changeInput}
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
    )
};
export default UpdateProduct;
