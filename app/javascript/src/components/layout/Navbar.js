import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-row navbar">
      <h3 className="header bold">Workout Track</h3>

      <h3 className="back">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => navigate(-1)}
        />
      </h3>
    </div>
  );
};

export default Navbar;
