import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Setting from "./Setting";
import "./UploadAvatar.css";

function UploadAvatar() {
  const { token } = useSelector((state) => state.info);
  const [pic, setPic] = useState(null);

  const avatar = async () => {
    const formData = new FormData();
    formData.append("profile-image", pic);
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/profile-image",
        formData,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "your profile image has been successfully changed ",
        showConfirmButton: false,
        timer: 2000,
      });
      setPic(null);
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="avatarorg">
      <Setting />
      <div className="avatar">
        <h1
          className="h1edit"
          style={{
            color: "#555",
            lineHeight: " 2em",
            marginLeft: "5px",
          }}
        >
          Upload your picture
        </h1>
        <div className="custome-file">
          <span>
            <i className="fa fa-upload fa-2x" aria-hidden="true"></i>click here
          </span>
          <fieldset>
            <input
              type="button"
              className="BtnAvatar"
              value="done"
              onClick={() => {
                console.log(pic);
                if (!pic) {
                  console.log("first");
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "please select your image",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                } else if (pic.size > 2 * 1024 * 1024) {
                  console.log("second");
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "your image size shouldn't be more than 2Mbs",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                } else if (
                  !["png", "jpg", "jpeg", "gif", "webp"].includes(
                    pic.type.split("/")[1]
                  )
                ) {
                  console.log("third");
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title:
                      "your image's type should be one of png , jpg , jpeg , gif or webp ",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                } else {
                  console.log("ok");
                  avatar();
                }
              }}
              style={{ position: "relative", top: "100px" }}
            />
            <input
              className="btn cancel"
              type="file"
              onChange={(e) => setPic(e.target.files[0])}
            />
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
