import React, { useEffect } from "react";
import Routers from "./Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const { token } = useSelector((state) => state.info);
  const dispatch = useDispatch();
  const getProfile = async () => {
    try {
      const { data } = await axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if (error.response.data.message) {
        dispatch({ type: "logOut" });
      }
    }
  };
  useEffect(() => {
    if (token) getProfile();
  }, []);
  return (
    <div>
      <Routers />
    </div>
  );
};

export default App;
