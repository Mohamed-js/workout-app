import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tracked from "../components/home/Tracked";
import { userProfile } from "../Helper";
import Welcome from "../components/home/Welcome";

const Home = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState("");
  const user = JSON.parse(sessionStorage.getItem("current_user"));

  useEffect(() => {
    userProfile(user.authentication_token).then((data) => {
      const userInfo = data;
      setUserInfo(userInfo);
    });
  }, [dispatch]);

  return (
    <div className="container">
      {userInfo && (userInfo.current_weight === 0 || userInfo.height === 0) && (
        <Welcome user={user} />
      )}
      <Tracked />
    </div>
  );
};

export default Home;
