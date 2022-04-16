import React, { useState } from "react";
let Product = () => {
  let [product, setProduct] = useState({
    product_Name: "Iphone 5s",
    price: 50000,
    qty: 1,
    image:
      "data:image/png;base64,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",
  });
  let incrQTY = () => {
    setProduct({ ...product, qty: product.qty + 1 });
  };
  let decrQTY = () => {
    setProduct({ ...product, qty: product.qty - 1 });
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={product.image} height="80px" />
                  </td>
                  <td>{product.product_Name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={decrQTY}
                    >
                      -{" "}
                    </button>
                    {product.qty}
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={incrQTY}
                    >
                      +
                    </button>
                  </td>
                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
