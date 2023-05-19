import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Setting from "./Setting";

function ChangePassword() {
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const { token } = useSelector((state) => state.info);

  const navigate = useNavigate();

  const editPassword = async () => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-password",
        {
          old_password: oldpass,
          new_password: newpass,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      toast.success("Login was successful", {
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
    <div>
      <Setting />
      <div className="changepass-div">
        <div className="wrapper">
          <div className="profile" style={{ height: "450px" }}>
            <div className="content">
              <h1 className="h1edit">change password</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <fieldset
                  className="fieldsetpass"
                  style={{
                    marginTop: "50px",
                    borderBottom: " 1px solid rgba(0, 0, 0, 0.07)",
                    padding: "15px",
                  }}
                >
                  <div className="grid-35">
                    <label className="labelpass" htmlFor="fname">
                      old password
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="password"
                      id="fname"
                      tabIndex="1"
                      onChange={(e) => {
                        setOldpass(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
                <fieldset className="fieldsetpass" style={{ padding: "15px" }}>
                  <div className="grid-35">
                    <label className="labelpass" htmlFor="lname">
                      Last Name
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="password"
                      id="lname"
                      tabIndex="2"
                      onChange={(e) => {
                        setNewpass(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>

                <fieldset
                  className="fieldsetpass"
                  style={{ marginTop: "20px" }}
                >
                  <input
                    type="button"
                    className="Btn cancel"
                    value="Cancel"
                    onClick={() => navigate("/")}
                  />
                  <input
                    type="submit"
                    className="Btn"
                    value="Save Changes"
                    onClick={(e) => {
                      if (
                        passwordRegex.test(oldpass) &&
                        passwordRegex.test(newpass)
                      ) {
                        editPassword();
                      } else {
                        toast.error("fill the fields", {
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
                    }}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ChangePassword;
