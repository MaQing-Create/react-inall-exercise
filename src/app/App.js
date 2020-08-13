import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";
import calculatorImg from "../images/calculator.png"
import timerImg from "../images/timer.png"

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div className="header">
                        <Link to='/'>HOME</Link>
                        <Link to='/calculator'>Calculator</Link>
                        <Link to='/timer'>Timer</Link>
                    </div>
                    <Switch>
                        <Route exact path='/calculator' component={Calculator}/>
                        <Route exact path='/timer' component={Timer}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
