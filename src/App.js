import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login"
import Signup from './pages/Signup'
import Profile from './pages/Profile';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
