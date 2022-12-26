import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bottombar from "./components/layout/Bottombar";
import Addmove from "./components/home/Addmove";
import Login from "./components/landing/Login";
import SignUp from "./components/landing/Signup";
import More from "./containers/More";
import Navbar from "./components/layout/Navbar";
import NewRecord from "./components/home/NewRecord";
import Home from "./containers/Home";
import Showpage from "./containers/Movement";
import Profile from "./components/more/Profile";
import NewSpecificRecord from "./components/home/NewSpecificRecord";
import Progress from "./containers/Progress";
import React, { useEffect, useState } from "react";
import "./index.css";
import { authenticate } from "./Helper";
import { useDispatch } from "react-redux";
import { fetchTrackedMovements, fetchUserRecords } from "./actions";
import Loading from "./components/layout/Loading";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    authen();
  }, []);

  const authen = async () => {
    const user = JSON.parse(sessionStorage.getItem("current_user"));
    let auth;

    if (user) {
      auth = await authenticate(user.authentication_token);
      setAuthenticated(await authenticate(user.authentication_token));
      setFetched(true);
    }
    if (auth) {
      dispatch(fetchTrackedMovements(user.authentication_token));
      dispatch(fetchUserRecords(user.authentication_token));
      dispatch({ type: "STORE_USER", payload: user });
    }
    setFetched(true);
  };
  return (
    <div className="App">
      <div className="mobile-view flex-col justify-between">
        <Router>
          <Navbar back="true" />
          {fetched ? (
            !authenticated ? (
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Login setAuthenticated={setAuthenticated} />}
                />
                <Route
                  exact
                  path="/login"
                  element={<Login setAuthenticated={setAuthenticated} />}
                />
                <Route exact path="/signup" element={<SignUp />} />
              </Routes>
            ) : (
              <>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/new" element={<Addmove />} />
                  <Route exact path="/show/:id" element={<Showpage />} />
                  <Route exact path="/new-record" element={<NewRecord />} />
                  <Route
                    exact
                    path="/new-record/:id"
                    element={<NewSpecificRecord />}
                  />
                  <Route
                    exact
                    path="/more"
                    element={<More setAuthenticated={setAuthenticated} />}
                  />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/progress" element={<Progress />} />
                </Routes>
                <Bottombar />
              </>
            )
          ) : (
            <Loading />
          )}
        </Router>
      </div>
    </div>
  );
}

export default App;
