import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-row navbar justify-between">
      <h5 className="back">
        <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />
      </h5>
      <h5 className="header bold">Workout Track</h5>
      <h5 className="back"></h5>
    </div>
  );
};

export default Navbar;
