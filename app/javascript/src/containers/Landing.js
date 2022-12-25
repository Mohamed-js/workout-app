import React from 'react';
import { Link} from 'react-router-dom';

function Landing() {
  // const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  // if (user) history.push('/home');
  return (
    <div className="sign container">
      <h1 className="welcome text-center">WELCOME TO WORKOUT TRACK</h1>
      <br />
      <br />
      <div className="flex-row center">
        <Link to="/login" className="login active btn">
          LOGIN
        </Link>
        |
        <Link to="/signup" className="sign-up">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Landing;
