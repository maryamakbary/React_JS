import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangeProfile from "./ChangeProfile";
import ChangePassword from "./ChangePassword";
import UploadAvatar from "./UploadAvatar";
import Error404 from "./Error404";
import Home from "./Home";
import LoginSignup from "./LoginSignup";
import OneProduct from "./OneProduct";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";
import Orders from "./Orders";
import OneOrder from "./OneOrder";
import Address from "./Address";
import CheckOut from "./CheckOut";
import { useSelector } from "react-redux";

const Routers = () => {
  const { token } = useSelector((state) => state.info);
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:_id" element={<OneProduct />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/setting/changeProfile"
          element={token ? <ChangeProfile /> : <Error404 />}
        />
        <Route
          path="/setting/changePassword"
          element={token ? <ChangePassword /> : <Error404 />}
        />
        <Route
          path="/setting/uploadAvatar"
          element={token ? <UploadAvatar /> : <Error404 />}
        />
        <Route path="/profile" element={token ? <Profile /> : <Error404 />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/Address" element={token ? <Address /> : <Error404 />} />
        <Route path="/CheckOut" element={token ? <CheckOut /> : <Error404 />} />
        <Route
          path="/Orders/:_id"
          element={token ? <OneOrder /> : <Error404 />}
        />
        <Route path="/Orders" element={token ? <Orders /> : <Error404 />} />
        {/* <Route path="/setting/orders" element={<Orders />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
