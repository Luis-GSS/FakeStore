import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import { addCart } from "../redux/action";

const Cart = () => {
  const cartProducts = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(delCart(product));
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 mb-1">
            <h1 className="display-6 fw-bolder text-center">Shoping Cart</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row mx-auto">
        {cartProducts.map((product) => (
          <div key={product.id} className="col-md-6 mb-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.title}
                    height="250px"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      <p className="lead fw-bold">
                        {product.qty} x ${product.price} = $
                        {product.qty * product.price}
                      </p>
                    </p>
                    <button
                      className="btn btn-outline-danger me-4"
                      onClick={() => removeFromCart(product)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark "
                      onClick={() => addProduct(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
