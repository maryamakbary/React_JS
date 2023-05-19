import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./CheckOut.css";

function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [totalPrice, setTotalPrice] = useState(0);
  const Navigate = useNavigate();
  const basket = useSelector((state) => state.basket);
  const basket2 = useSelector((state) => state.basket2);
  const address = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const postOrder = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: basket,
          shippingAddress: {
            address: address.address,
            city: address.city,
            postalCode: address.postalCode,
            phone: address.phone,
          },
          paymentMethod: paymentMethod,
          shippingPrice: 20,
          totalPrice: totalPrice,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your purchase has been successfully submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({
        type: "delete",
        payload: [],
      });
      dispatch({
        type: "delete2",
        payload: [],
      });
      setTimeout(() => {
        Navigate("/");
      }, 1500);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    setTotalPrice(
      basket2.reduce((total, item) => total + item.price * item.qty, 0) + 20
    );
  }, []);

  return (
    <div className="htmlcart">
      <div className="shopping-carts" style={{ marginTop: "3rem" }}>
        <div
          className="titles"
          style={{
            backgroundColor: "#1c0119",
            color: "white",
            borderRadius: "0.5rem 0.5rem 0 0 ",
          }}
        >
          your order
        </div>
        <div style={{ display: "block" }}>
          {basket2.map((item, index) => {
            return (
              <div
                className="item"
                style={{
                  // borderBottom: "1px solid #ccc",
                  width: "90%",
                  margin: "0 auto",
                }}
              >
                <div className="image">
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      width: "100px",
                      height: "100px",
                      // background: "red",
                    }}
                  ></div>
                </div>

                <div className="description" style={{ width: "50%" }}>
                  <span style={{ fontWeight: "bold" }}>{item.name}</span>
                  <span>{item.brand}</span>
                  <span>{item.color}</span>
                </div>

                <div className="quantity">
                  <button
                    className="plus-btn buttonshop"
                    style={{ visibility: "hidden" }}
                    type="button"
                    name="button"
                  >
                    <img
                      src="https://designmodo.com/demo/shopping-cart/plus.svg"
                      alt=""
                    />
                  </button>
                  {/* <input type="text" name="name" value="1" /> */}
                  <span>{item.qty}</span>
                  <button
                    style={{ visibility: "hidden" }}
                    className="minus-btn buttonshop"
                    type="button"
                    name="button"
                  >
                    <img
                      src="https://designmodo.com/demo/shopping-cart/minus.svg"
                      alt=""
                    />
                  </button>
                </div>

                <div className="total-price">${item.price}</div>
              </div>
            );
          })}
          {/* <div
            className="col_1of2 meta-data"
            style={{ margin: "20px 0 0 100px" }}
          ></div> */}
        </div>
      </div>
      <div
        className="grid_12 summary"
        style={{
          width: "750px",
          margin: "0rem auto",
          marginBottom: "4rem",
          marginTop: "-3.5rem",
          boxShadow: "0px 0px 5px 5px rgb(0 0 0 / 10%)",
          borderRadius: "0.5rem",
        }}
      >
        <div className="inner_container">
          <div>
            <div
              style={{
                marginLeft: "6rem",
                // justifyContent: "center",
                paddingTop: "2rem",
                borderBottom: "1px solid #ccc",
                width: "75%",
              }}
            >
              <p>
                paymentMethod :
                <select
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{
                    width: "150px",
                    height: "25px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <option>cash</option>
                  <option>credit cart</option>
                </select>
              </p>
              <p>
                shippingPrice : <span style={{ fontWeight: "bold" }}>$20</span>
              </p>
              <p>
                totalPrice :
                <span style={{ fontWeight: "bold" }}> ${totalPrice}</span>
              </p>
            </div>

            <div
              className="divAddress"
              style={{
                // display: "flex",
                marginLeft: "6rem",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <p>
                address :
                <span style={{ fontWeight: "bold" }}>{address.address}</span>
              </p>
              <p>
                city :<span style={{ fontWeight: "bold" }}>{address.city}</span>
              </p>
              <p>
                postal-code :
                <span style={{ fontWeight: "bold" }}>{address.postalCode}</span>
              </p>
              <p>
                mobile :
                <span style={{ fontWeight: "bold" }}>{address.phone}</span>
              </p>
            </div>
          </div>
          <div style={{ padding: "1rem" }}>
            <div
              className="btn-summary"
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "2rem",
              }}
            >
              <div>
                <button
                  onClick={() => Navigate("/Address")}
                  href="#"
                  className="btn-checkout btn-reverse buttonshop"
                  style={{
                    width: "100px",
                    height: "30px",
                    boxShadow: "grey 2px 2px 9px 1px",
                  }}
                >
                  edit address
                </button>
                <button
                  onClick={() => Navigate("/cart")}
                  href="#"
                  className="btn-checkout btn-reverse buttonshop"
                  style={{
                    width: "100px",
                    height: "30px",
                    boxShadow: "grey 2px 2px 9px 1px",
                    marginLeft: "5px",
                  }}
                >
                  edit order
                </button>
              </div>
              <button
                onClick={() => postOrder()}
                href="#"
                className="btn-checkout buttonshop"
                style={{
                  border: "none",
                  width: "100px",
                  height: "30px",
                  boxShadow: "grey 2px 2px 9px 1px",
                  backgroundColor: "#E1E8EE",
                }}
              >
                done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
