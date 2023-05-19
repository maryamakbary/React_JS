import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";
import "./Orders.css";

function Orders() {
  const { token } = useSelector((state) => state.info);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const getOrder = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://kzico.runflare.run/order/", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setLoading(false);
      setOrders(data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <Badge bg="danger">{error}</Badge>
      ) : (
        <div className="orderorg">
          <div
            className="table-wrapper"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
          >
            <div
              className="table-row table-header"
              style={{ borderRadius: "10px 10px 2px 5px" }}
            >
              <div className="col-wrapper order-date-number-po">
                <div className="table-col order-date">Items</div>
                <div className="table-col order-date">payment Method</div>
                <div className="table-col order-date">totalPrice</div>
              </div>
            </div>

            <div className="table-row">
              {orders.map((item, index) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => Navigate(`/Orders/${item._id}`)}
                    className="col-wrapper order-date-number-po"
                  >
                    <div className="table-col order-date order">
                      {item.orderItems.reduce((sum, item) => sum + item.qty, 0)}
                    </div>
                    <div className="table-col order-date order">
                      {item.paymentMethod}
                    </div>
                    <div className="table-col order-date order">
                      ${item.totalPrice}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
