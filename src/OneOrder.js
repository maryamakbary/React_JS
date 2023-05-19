import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";
import "./OneOrder.css";

function OneOrder() {
  const { token } = useSelector((state) => state.info);
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { _id } = useParams();
  const Navigate = useNavigate();

  const getOneOrder = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://kzico.runflare.run/order/${_id}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setOrders(data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getOneOrder();
    console.log(orders);
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <Badge bg="danger">{error}</Badge>
      ) : (
        <div className="oneorder">
          <div className="container-fluid px-0 bg-black">
            <div className="container px-0"></div>
          </div>
          <div className="container mt-3 mt-md-5">
            <h2 className="text-charcoal hidden-sm-down">Your Orders</h2>
            <div className="row">
              <div className="col-10">
                <div className="list-group mb-5">
                  <div
                    className="list-group-item p-3 bg-snow"
                    style={{ position: "relative" }}
                  >
                    <div className="row w-100 no-gutters">
                      <div className="col-6 col-md">
                        <h6 className="text-charcoal mb-0 w-100">
                          payment Method
                        </h6>
                        <a
                          href=""
                          className="text-pebble mb-0 w-100 mb-2 mb-md-0"
                          style={{ textDecoration: "none" }}
                        >
                          {orders.paymentMethod}
                        </a>
                      </div>

                      <div className="col-6 col-md">
                        <h6 className="text-charcoal mb-0 w-100">Total</h6>
                        <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                          ${orders.totalPrice}
                        </p>
                      </div>
                      <div className="col-6 col-md">
                        <h6 className="text-charcoal mb-0 w-100">Shipped To</h6>
                        <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                          {orders.shippingAddress?.address}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item p-3 bg-white">
                    {orders.orderItems?.map((item) => {
                      return (
                        <div
                          className="row no-gutters"
                          // style={{ width: "150%" }}
                        >
                          <div className="col-12 col-md-9 pr-0 pr-md-3"></div>

                          <div className="row no-gutters mt-3">
                            <div className="col-4 col-md-1">
                              <div
                                style={{
                                  backgroundImage: `url(${item.product.image})`,

                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "contain",
                                  backgroundPosition: "center",
                                  width: "100px",
                                  height: "100px",
                                  marginLeft: "3rem",
                                }}
                              ></div>

                              {/* <img
                                className="img-fluid pr-3"
                                src="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffc79d08c12dc.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=c9a50d474788f2658d13b21aa62edd6c"
                                alt=""
                              /> */}
                            </div>
                            <div
                              className="col-10 col-md-8 pr-0 pr-md-3"
                              style={{ width: "25rem", marginLeft: "10rem" }}
                            >
                              <h6 className="text-charcoal mb-2 mb-md-1">
                                <a href="" className="text-charcoal">
                                  {item.product.name}
                                </a>
                              </h6>
                              <ul className="list-unstyled text-pebble mb-2 small">
                                <li className="">
                                  <b>Color:</b> {item.product.color}
                                </li>
                                <li className="">
                                  <b>brand:</b> {item.product.brand}
                                </li>
                              </ul>
                              <h6 className="text-charcoal text-left mb-0 mb-md-2">
                                <b>${item.product.price}</b>
                              </h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OneOrder;
