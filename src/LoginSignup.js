 import React, { useState } from "react";
import Navbar from "./Navbar";
import "./LoginSignup.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function LoginSignup() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const [name, setName] = useState("");
  const [name2, setName2] = useState(false);
  const [namelogin, setNamelogin] = useState("");
  const [namelogin2, setNamelogin2] = useState(false);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(false);
  const [passwordlogin, setPasswordlogin] = useState("");
  const [passwordlogin2, setPasswordlogin2] = useState(false);
  const [cofrimPassword, setConfrimPassword] = useState("");
  const [cofrimPassword2, setConfrimPassword2] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobile2, setMobile2] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/login",
        {
          email: namelogin,
          password: passwordlogin,
        }
      );
      toast.success("Login was successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch({ type: "login", payload: data.user });
      localStorage.setItem("info", JSON.stringify(data.user));
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    } catch (error) {
      // console.log(error.response.data.massage);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const signUp = async () => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: name,
          email: email,
          password: password,
          mobile: mobile,
        }
      );
      toast.success("sign up was successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="bodyLogin" style={{ marginTop: "25px" }}>
            {/* <head>
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css">
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
  </head> */}

            <div className="main">
              <input
                className="inputlogin"
                type="checkbox"
                id="chk"
                aria-hidden="true"
              />

              <div className="signup">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <label
                    className="labellogin"
                    htmlFor="chk"
                    aria-hidden="true"
                  >
                    Sign up
                  </label>
                  <input
                    style={{ border: name2 && " 1px solid red" }}
                    // value={name}
                    className="inputlogin"
                    type="text"
                    name="txt"
                    placeholder="User name"
                    required=""
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onBlur={() => {
                      if (name.length < 8) {
                        setName2(true);
                        toast.error(
                          "your username must be more than 8 characters ",
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
                      setName2(false);
                    }}
                  />
                  <input
                    // value={email}
                    style={{ border: email2 && " 1px solid red" }}
                    className="inputlogin"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (!emailRegex.test(e.target.value)) {
                        setEmail2(true);
                        toast.error("your email is not currect", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }
                    }}
                    onFocus={() => setEmail2(false)}
                  />
                  <input
                    // value={password}
                    style={{ border: password2 && " 1px solid red" }}
                    className="inputlogin"
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (!passwordRegex.test(e.target.value)) {
                        setPassword2(true);
                        toast.error(
                          "your password must contain upper & lower case latters , numbers",
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
                    onFocus={() => setPassword2(false)}
                  />
                  <input
                    // value={cofrimPassword}
                    style={{ border: cofrimPassword2 && " 1px solid red" }}
                    className="inputlogin"
                    type="password"
                    name="pswd"
                    placeholder="Confrim Password"
                    required=""
                    onChange={(e) => {
                      setConfrimPassword(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (password != e.target.value) {
                        setConfrimPassword2(true);
                        toast.error(
                          "password & confrim password does not match",
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
                    onFocus={() => setConfrimPassword2(false)}
                  />
                  <input
                    // value={mobile}
                    style={{ border: mobile2 && " 1px solid red" }}
                    className="inputlogin"
                    type="tel"
                    name="pswd"
                    placeholder="mobile"
                    required=""
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (mobile.length != 11) {
                        setMobile2(true);
                        toast.error("your phone number must be 11 digit long", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }
                    }}
                    onFocus={() => setMobile2(false)}
                  />
                  <button
                    className="buttonlogin"
                    onClick={() => {
                      if (
                        name.length > 7 &&
                        passwordRegex.test(password) &&
                        emailRegex.test(email) &&
                        mobile.length == 11
                      ) {
                        signUp();
                      } else {
                        console.log("error button sign up");
                      }
                    }}
                  >
                    Sign up
                  </button>
                </form>
              </div>

              <div className="login">
                <form onSubmit={(e) => e.preventDefault()}>
                  <label
                    className="labellogin"
                    htmlFor="chk"
                    aria-hidden="true"
                  >
                    Login
                  </label>
                  <input
                    style={{ border: namelogin2 && " 1px solid red" }}
                    // value={namelogin}
                    className="inputlogin"
                    type="text"
                    name="username"
                    placeholder="username"
                    required=""
                    onChange={(e) => {
                      setNamelogin(e.target.value);
                    }}
                    onBlur={() => {
                      if (namelogin.length < 8) {
                        setNamelogin2(true);
                        toast.error(
                          "your username must be more than 8 characters ",
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
                      setNamelogin2(false);
                    }}
                  />
                  <input
                    style={{ border: passwordlogin2 && " 1px solid red" }}
                    // value={passwordlogin}
                    className="inputlogin"
                    type="password"
                    name="pswd"
                    placeholder="Password"
                    required=""
                    onChange={(e) => {
                      setPasswordlogin(e.target.value);
                    }}
                    onBlur={(e) => {
                      if (!passwordRegex.test(e.target.value)) {
                        setPasswordlogin2(true);
                        toast.error(
                          "your password must contain upper & lower case latters , numbers",

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
                      setPasswordlogin2(false);
                    }}
                  />
                  <button
                    className="buttonlogin"
                    onClick={() => {
                      if (
                        namelogin.length > 7 &&
                        passwordRegex.test(passwordlogin)
                      ) {
                        login();
                      } else {
                        console.log("error button login");
                      }
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default LoginSignup;
