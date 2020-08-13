import React from 'react';
import './home.less';
import calculatorImg from "../images/calculator.png";
import { BrowserRouter, Link } from "react-router-dom";
import timerImg from "../images/timer.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>在线实用工具</h1>
      </div>
      <div className="homeContent">
        <div className='content1'>
          <img src={calculatorImg} alt="Calculator" />
          <Link to='/calculator'>Calculator</Link>
        </div>
        <div className='content1'>
          <img src={timerImg} alt="Timer" />
          <Link to='/timer'>Timer</Link>
        </div>
      </div>
    </div>);
};

export default Home;