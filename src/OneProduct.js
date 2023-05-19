import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Loading from "./Loading";
import "./OneProduct.css";
import Navbar from "./Navbar";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";

function OneProduct() {
  const { _id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  const basket = useSelector((state) => state.basket);
  const basket2 = useSelector((state) => state.basket2);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://kzico.runflare.run/product/${_id}`
      );
      setLoading(false);
      setProduct(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="oneproduct">
        {loading ? (
          <Loading />
        ) : error ? (
          <Badge bg="danger">error</Badge>
        ) : (
          <div className="asliProduct">
            <Navbar />

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div id="container">
              <div className="product-details">
                <h1>{product.name}</h1>
                <div className="hint-star star" style={{ fill: "gold" }}>
                  <StarRatings
                    fill="gold"
                    rating={product.rating}
                    starDimension="15px"
                    starSpacing="3px"
                  />
                </div>

                <p className="information">{product.description}</p>
                <p className="information">{product.countInStock}-Available</p>
                <p
                  className="information"
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  ${product.price}
                </p>

                <div className="control">
                  {!basket.filter((item) => item.product === _id).length ? (
                    <button
                      className="btn"
                      style={{ padding: "0", marginLeft: "-10px" }}
                      onClick={() => {
                        if (product.countInStock) {
                          const help2 = JSON.parse(JSON.stringify(basket2));
                          const help = JSON.parse(JSON.stringify(basket));
                          if (
                            !help.filter((item) => item.product === _id).length
                          ) {
                            help2.push({ ...product, qty: 1 });
                            dispatch({ type: "add2", payload: help2 });
                            help.push({ product: product._id, qty: 1 });
                            dispatch({ type: "add", payload: help });
                            console.log(help);
                          }
                        }
                      }}
                    >
                      <span
                        className="buy"
                        style={{
                          backgroundColor: "#1c0119",
                          borderRadius: "10px",
                          color: "hsl(314, 100%, 87%)",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          border: "none",
                        }}
                      >
                        add to cart
                      </span>
                    </button>
                  ) : (
                    <div className="btnclick">
                      {basket.filter((item) => item.product === _id)[0].qty ===
                      1 ? (
                        <svg
                          onClick={() => {
                            dispatch({
                              type: "remove",
                              payload: basket.filter(
                                (item) => item.product !== _id
                              ),
                            });
                            dispatch({
                              type: "remove2",
                              payload: basket2.filter(
                                (item) => item._id !== _id
                              ),
                            });
                          }}
                          style={{
                            color: "rgb(40, 54, 24)",
                            width: "1.5rem",
                            height: "1.5rem",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                            fill="#283618"
                          ></path>
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            fill="#283618"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          onClick={() => {
                            if (
                              basket.filter((item) => item.product === _id)[0]
                                .qty
                            ) {
                              dispatch({
                                type: "minus",
                                payload: basket.map((item) => {
                                  if (item.product === _id) {
                                    return { ...item, qty: item.qty - 1 };
                                  }
                                  return item;
                                }),
                              });
                              dispatch({
                                type: "minus2",
                                payload: basket2.map((item) => {
                                  if (item._id === _id) {
                                    return { ...item, qty: item.qty - 1 };
                                  }
                                  return item;
                                }),
                              });
                            }
                          }}
                          style={{
                            color: "rgb(40, 54, 24)",
                            width: "1.5rem",
                            height: "1.5rem",
                          }}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="bi bi-trash"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 8H4V7H11V8Z"
                            fill="#283618"
                          ></path>
                        </svg>
                      )}
                      <span>
                        {basket.filter((item) => item.product === _id)[0].qty}
                      </span>
                      <svg
                        onClick={() => {
                          if (
                            basket.filter((item) => item.product === _id)[0]
                              .qty < product.countInStock
                          ) {
                            dispatch({
                              type: "plus",
                              payload: basket.map((item) => {
                                if (item.product === _id) {
                                  return { ...item, qty: item.qty + 1 };
                                }
                                return item;
                              }),
                            });
                            dispatch({
                              type: "plus2",
                              payload: basket2.map((item) => {
                                if (item._id === _id) {
                                  return { ...item, qty: item.qty + 1 };
                                }
                                return item;
                              }),
                            });
                          }
                        }}
                        style={{
                          color: "rgb(40, 54, 24)",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          fill="#283618"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="product-image img"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <img className="img"
                  src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                /> */}

                <div className="info">
                  <h2 className="h2product" style={{ marginTop: "80px" }}>
                    Description
                  </h2>
                  <ul className="ulproduct">
                    <li className="liproduct">
                      <strong>category : </strong>
                      {product.category}
                    </li>
                    <li>
                      <strong>color : </strong>
                      {product.color}
                    </li>
                    <li>
                      <strong>brand: </strong>
                      {product.brand}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneProduct;
