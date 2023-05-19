import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Navbar from "./Navbar";
import "./Profile.css";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState({});
  const { token } = useSelector((state) => state.info);
  const getProfile = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setProfile(data);
      //   console.log(profile);
    } catch (error) {
      //   console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Badge bg="danger">error</Badge>
      ) : (
        <div>
          <Navbar />

          <div className="profileorg">
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
              integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
              crossorigin="anonymous"
            />
            <div class="cardpro">
              <div class="textpro">
                <img src={profile.user?.image} alt="" />
                <h4>{profile.user?.username}</h4>
                <p
                  style={{
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "20px",
                    marginBottom: "5px",
                  }}
                >
                  {profile.user?.email}
                </p>
                <p>
                  mobile :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.mobile}
                  </span>
                </p>
                <p>
                  first name :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.firstname}
                  </span>
                </p>
                <p>
                  last name :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.lastname}
                  </span>
                </p>
                <p>
                  gender :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.gender}
                  </span>
                </p>
                <p>
                  age :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.age}
                  </span>
                </p>
                <p>
                  city :
                  <span style={{ fontWeight: "bold" }}>
                    {profile.user?.city}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
