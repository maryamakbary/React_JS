import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { token } = useSelector((state) => state.info);
  const basket = useSelector((state) => state.basket);
  const basket2 = useSelector((state) => state.basket2);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  console.log(basket);
  return (
    <div>
      <Navbar />
      {basket2.length ? (
        <div className="htmlcart">
          <div className="shopping-carts">
            <div
              className="titles"
              style={{
                backgroundColor: "#1c0119",
                color: "white",
                borderRadius: "0.5rem 0.5rem 0 0 ",
              }}
            >
              Shopping Bag
            </div>
            {basket2.map((item, index) => {
              console.log(basket);
              return (
                <div className="item">
                  <div className="buttons">
                    <span className="delete-btn"></span>
                    {/* <span className="like-btn"></span> */}
                  </div>

                  <div className="image">
                    <div
                      style={{
                        backgroundImage: `url(${item.image})`,

                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        width: "100px",
                        height: "100px",
                      }}
                    ></div>
                  </div>

                  <div className="description">
                    <span>{item.name}</span>
                    <span>{item.color}</span>
                  </div>

                  <div
                    className="btnclick"
                    style={{
                      width: "20%",
                      boxShadow: "none",
                      // backgroundColor: "#fafafa",
                      height: "60%",
                    }}
                  >
                    {item.qty === 1 ? (
                      <svg
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",

                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#445128",
                            cancelButtonColor: "#820000",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              const help2 = JSON.parse(JSON.stringify(basket2));
                              const help = JSON.parse(JSON.stringify(basket));
                              help2.splice(index, 1);
                              help.splice(index, 1);
                              dispatch({
                                type: "plus",
                                payload: [...help],
                              });
                              dispatch({
                                type: "plus2",
                                payload: [...help2],
                              });
                              Swal.fire(
                                "Deleted!",
                                "Your order has been deleted.",
                                "success"
                              );
                            }
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
                          const help2 = JSON.parse(JSON.stringify(basket2));
                          const help = JSON.parse(JSON.stringify(basket));
                          help2[index].qty -= 1;
                          help[index].qty -= 1;
                          dispatch({
                            type: "plus",
                            payload: [...help],
                          });
                          dispatch({
                            type: "plus2",
                            payload: [...help2],
                          });
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

                    <span>{item.qty}</span>
                    <svg
                      onClick={() => {
                        if (item.qty < item.countInStock) {
                          const help2 = JSON.parse(JSON.stringify(basket2));
                          const help = JSON.parse(JSON.stringify(basket));
                          help2[index].qty += 1;
                          help[index].qty += 1;
                          dispatch({
                            type: "plus",
                            payload: [...help],
                          });
                          dispatch({
                            type: "plus2",
                            payload: [...help2],
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
                  <div className="total-price">${item.qty * item.price}</div>
                </div>
              );
            })}
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
              {/* <div
                className="titles"
                style={{
                  height: "45px",
                  paddingTop: "0.5rem",
                  paddingBottom: "1.5rem",
                  backgroundColor: "#1c0119",
                  color: "white",
                  borderRadius: "0.5rem 0.5rem 0 0 ",
                }}
              ></div> */}
              <div className="summary-content" style={{ padding: "1rem" }}>
                <div
                  className="col_1of2 meta-data"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="sub-total" style={{ margin: "20px auto" }}>
                    <em style={{ fontWeight: "bold" }}>Sub Total: </em>
                    <span className="amount"></span>
                  </div>
                  <div
                    className="sub-total"
                    style={{ margin: "20px auto", fontWeight: "bold" }}
                  >
                    <em>
                      $
                      {basket2.reduce(
                        (total, item) => total + item.price * item.qty,
                        0
                      )}
                    </em>
                    <span className="amount"></span>
                  </div>
                </div>
                <div className="col_1of2">
                  <div className="total">
                    <span className="amount"></span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="btn-summary"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingBottom: "2rem",
                  }}
                >
                  <button
                    href="#"
                    className="btn-checkout btn-reverse buttonshop"
                    style={{
                      width: "150px",
                      height: "30px",
                      boxShadow: "grey 2px 2px 9px 1px",
                    }}
                  >
                    Continue Shopping
                  </button>

                  <button
                    onClick={() => Navigate("/Address")}
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
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "500px",
            alignItems: "center",
            fontSize: "5rem",
          }}
        >
          buy something :|
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
