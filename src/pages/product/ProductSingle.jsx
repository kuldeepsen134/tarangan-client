import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import { useDispatch, useSelector } from "react-redux";
import { productById } from "../../redux/slice/product/product.slice";

const ProductSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(productById(id))
  }, [dispatch])
  console.log('data', productData);
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <InnerImageZoom
                      src="https://i.imgur.com/Dhebu4F.jpg"
                      zoomSrc="https://i.imgur.com/Dhebu4F.jpg"
                    />
                  </div>
                  <div className="thumbnail text-center">
                    <img
                      onClick={() => "change_image(this)"}
                      src="https://i.imgur.com/Rx7uKd0.jpg"
                      width={70}
                      alt=""
                    />
                    <img
                      onClick={() => "change_image(this)"}
                      src="https://i.imgur.com/Dhebu4F.jpg"
                      width={70}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left" />
                      <span className="ml-1">Back</span>
                    </div>
                    <i className="fa fa-shopping-cart text-muted" />
                  </div>
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">{productData && productData.name}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">Price:- Rs.{productData && productData.price}</span>
                      {/* <div className="ml-2">
                        <small className="dis-price">Rs{productData && productData.price}</small>
                      </div> */}
                    </div>
                  </div>
                  <p className="about">
                    {productData && productData.description}
                  </p>
                  <div className="sizes mt-5">
                    <h6 className="text-uppercase">Size</h6>
                    <label className="radio">
                      <input
                        type="radio"
                        name="size"
                        defaultValue="S"
                        defaultChecked=""
                      />
                      <span>S</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="size" defaultValue="M" />
                      <span>M</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="size" defaultValue="L" />
                      <span>L</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="size" defaultValue="XL" />
                      <span>XL</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="size" defaultValue="XXL" />
                      <span>XXL</span>
                    </label>
                  </div>
                  <div className="cart mt-4 align-items-center">
                    <button
                      className="btn btn-danger text-uppercase mr-2 px-4"
                      onClick={() => navigate("/app/cart")}
                    >
                      Add to cart
                    </button>
                    <i className="fa fa-heart text-muted" />
                    <i className="fa fa-share-alt text-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
