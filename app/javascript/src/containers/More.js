import React from "react";
import { useNavigate } from "react-router";
import { faSignOutAlt, faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const More = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button
        type="button"
        className="logout flex-row btn space-between"
        onClick={() => {
          navigate("/profile");
        }}
      >
        PROFILE
        <FontAwesomeIcon icon={faPersonBooth} />
      </button>
      <br />
      <button
        type="button"
        className="logout flex-row btn space-between"
        onClick={() => {
          sessionStorage.removeItem("current_user");
          setAuthenticated(false);
          navigate("/");
        }}
      >
        LOGOUT
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
};

export default More;
