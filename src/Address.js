import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Address.css";
import Navbar from "./Navbar";

function Address() {
  const [city, setCity] = useState("");
  const [city2, setCity2] = useState(false);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState(false);
  const [postal, setPostal] = useState("");
  const [postal2, setPostal2] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobile2, setMobile2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="container"
          style={{
            width: "50%",
            marginTop: "40px",
            boxShadow: "grey 0px 0px 11px 0px",
            paddingBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h4
            className="text-center-display-2"
            style={{ paddingTop: "30px", color: "#1c0119" }}
          >
            Billing Address
          </h4>
          <form
            action=""
            style={{ marginTop: "30px" }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                style={{
                  border: city2 && " 1px solid red",
                  boxShadow: "0px 0px 0px 0px inset",
                }}
                type="text"
                id="city"
                className="form-control"
                placeholder="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                onBlur={(e) => {
                  if (e.target.value.length == 0) {
                    setCity2(true);
                    toast.error(
                      "you must enter a value in city field",

                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  }
                }}
                onFocus={() => {
                  setCity2(false);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address ">Address</label>
              <div className="input-group">
                <input
                  style={{
                    border: address2 && " 1px solid red",
                    boxShadow: "0px 0px 0px 0px inset",
                  }}
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length == 0) {
                      setAddress2(true);
                      toast.error(
                        "you must enter a value in address field",

                        {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        }
                      );
                    }
                  }}
                  onFocus={() => {
                    setAddress2(false);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="postalform">
                Postal Code <span className="text-muted"></span>
              </label>
              <input
                style={{
                  border: postal2 && " 1px solid red",
                  boxShadow: "0px 0px 0px 0px inset",
                }}
                type="text"
                className="form-control"
                id="postalform"
                placeholder="10-digit"
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
                onBlur={(e) => {
                  if (e.target.value.length == 0) {
                    setPostal2(true);
                    toast.error(
                      "you must enter a value in postal-code field",

                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  }
                }}
                onFocus={() => {
                  setPostal2(false);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="text-muted"></span>
              </label>
              <input
                style={{
                  border: mobile2 && " 1px solid red",
                  boxShadow: "0px 0px 0px 0px inset",
                }}
                type="tel"
                id="phone"
                className="form-control"
                placeholder="phone number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                onBlur={(e) => {
                  if (e.target.value.length == 0) {
                    setMobile2(true);
                    toast.error(
                      "you must enter a value in number field",

                      {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  }
                }}
                onFocus={() => {
                  setMobile2(false);
                }}
              />
            </div>
          </form>
          <button
            onClick={() => {
              if (
                city.length &&
                address.length &&
                postal.length &&
                mobile.length
              ) {
                dispatch({
                  type: "address",
                  payload: {
                    address: address,
                    city: city,
                    postalCode: postal,
                    phone: mobile,
                  },
                });
                navigate("/CheckOut");
              }
            }}
            className="btnaddress"
            type="submit"
            style={{
              display: "block",
              margin: "50px auto",
              width: "130px",
              height: "50px ",
              color: "white",
              borderRadius: "5px",
              border: "0",
            }}
          >
            next
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Address;
