import React, {useState} from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';

let CreateProduct = () => {
    let history = useHistory();
    let [product , setProduct] = useState({
        name : '',
        image : '',
        price : '',
        qty : '',
        info : ''
    });
    let [submitted , setSubmitted] = useState(false);
    let [errorMessage , setErrorMessage] = useState('');

    // changeInput
    let changeInput = (event) => {
        setProduct({
            ...product,
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
                setProduct({
                    ...product,
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
        let dataURL = `http://127.0.0.1:5000/api/products/`;
        Axios.post(dataURL , product).then((response) => {
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
                                        <form onSubmit={submitProduct}>
                                            <div className="form-group">
                                                <input required
                                                       name="name"
                                                       value={product.name}
                                                       onChange={changeInput}
                                                       type="text" className="form-control"
                                                       placeholder="Product Name"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-file">
                                                    <input required
                                                           onChange={changeImage}
                                                           type="file" className="custom-file-input"
                                                           id="customFile"/>
                                                    <label className="custom-file-label" htmlFor="customFile">Product
                                                        Image</label>
                                                    {
                                                        product.image &&
                                                        <img src={product.image} alt="" width="20"
                                                             height="20"/>
                                                    }
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input required
                                                       name="price"
                                                       value={product.price}
                                                       onChange={changeInput}
                                                       type="number" className="form-control" placeholder="Price"/>
                                            </div>
                                            <div className="form-group">
                                                <input required
                                                       name="qty"
                                                       value={product.qty}
                                                       onChange={changeInput}
                                                       type="number" className="form-control"
                                                       placeholder="Available Qty"/>
                                            </div>
                                            <div className="form-group">
                                            <textarea required
                                                      name="info"
                                                      value={product.info}
                                                      onChange={changeInput}
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
    )
};
export default CreateProduct;
