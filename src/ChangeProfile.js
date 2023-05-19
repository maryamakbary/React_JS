import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./ChangeProfile.css";
import Setting from "./Setting";

function ChangeProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const { token } = useSelector((state) => state.info);

  const editProfile = async () => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-profile",
        {
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          age: age,
          city: city,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      toast.success("edit was successful", {
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
      <div className="changeprofile-div">
        <div className="wrapper">
          <div className="profile">
            <div className="content">
              <h1 className="h1edit">Edit Profile</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <fieldset className="fieldedit">
                  <div className="grid-35">
                    <label className="labeledit" htmlFor="fname">
                      First Name
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="text"
                      id="fname"
                      tabIndex="1"
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
                <fieldset className="fieldedit">
                  <div className="grid-35">
                    <label className="labeledit" htmlFor="lname">
                      Last Name
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="text"
                      id="lname"
                      tabIndex="2"
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>

                <fieldset className="fieldedit">
                  <div className="grid-35">
                    <label className="labeledit" htmlFor="forHire">
                      Gender
                    </label>
                  </div>
                  <div
                    className="grid-65"
                    style={{
                      width: "61%",
                      marginRight: "8px",
                    }}
                  >
                    <select
                      className="selectedit"
                      name="work"
                      id="forHire"
                      tabIndex="7"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </div>
                </fieldset>

                <fieldset className="fieldedit">
                  <div className="grid-35">
                    <label className="labeledit" htmlFor="company">
                      Age
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="text"
                      id="company"
                      tabIndex="10"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
                <fieldset className="fieldedit">
                  <div className="grid-35">
                    <label className="labeledit" htmlFor="position">
                      City
                    </label>
                  </div>
                  <div className="grid-65">
                    <input
                      type="text"
                      id="position"
                      tabIndex="11"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
                <fieldset className="fieldedit">
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
                    onClick={() => {
                      if (
                        firstname.length &&
                        lastname.length &&
                        age.length &&
                        city.length
                      ) {
                        editProfile();
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

export default ChangeProfile;
