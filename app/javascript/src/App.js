import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bottombar from './components/layout/Bottombar';
import Addmove from './components/home/Addmove';
import Login from './components/landing/Login';
import SignUp from './components/landing/Signup';
import More from './containers/More';
import Navbar from './components/layout/Navbar';
import NewRecord from './components/home/NewRecord';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Showpage from './containers/Movement';
import Profile from './components/more/Profile';
import NewSpecificRecord from './components/home/NewSpecificRecord';
import Progress from './containers/Progress';
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Workout Track!</h1>
      <div className="mobile-view flex-col justify-between">
      <Router>
        <Navbar back="true" />
        <Routes>
          <Route exact path="/" element={ <Landing/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/new" element={<Addmove/>} />
          <Route exact path="/show/:id" element={<Showpage/>} />
          <Route exact path="/new-record" element={<NewRecord/>} />
          <Route exact path="/new-record/:id" element={<NewSpecificRecord/>} />
          <Route exact path="/more" element={<More/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/progress" element={<Progress/>} />
        </Routes>
        <Bottombar />
      </Router>
      </div>
    </div>
  );
}

export default App;
