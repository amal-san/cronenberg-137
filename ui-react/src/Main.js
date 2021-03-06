import React, { Component } from "react";
import {
  Route,Switch,
  NavLink,IndexRoute,
  BrowserRouter as Router
} from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import Home from "./Pages/Home";
import Character from './Pages/Character';
import About from './Pages/About';
import Search from './Pages/Search';
import './Main.css'

class Main extends Component {

	render() {

		return(
    <HashRouter>
  		<div>
          <div className="container">
          <div className="ui pointing menu" id ="nav">
          <div className="header item">
          <img className="ui avatar image" src="https://images.hellogiggles.com/uploads/2017/04/02040635/rick-and-morty.jpg"/>
            Rick and Morty

          </div>
          <a className="item">
            <NavLink exact to="/home">Home</NavLink>  
          </a>
          <a className="item">
            <NavLink exact to="/character/">Characters</NavLink>
          </a>
          <a className="item">
            <NavLink exact to="/search/">Search</NavLink>
          </a>
          <a className="item">
            <NavLink exact to="/about/">About</NavLink>
          </a>
        </div>
           <div>
              <img  className="ui image" src ='https://static3.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Season-4-Logo.jpg' alt='image' style={{width:'100%',height:'100%'}}></img>
           </div>
              <Route path="/home" component={Home}/>
              <Route path="/character/" component={Character}/>
              <Route path='/search/' component={Search}/>
              <Route path="/about/" component={About}/> 
            </div>
      </div>
    </HashRouter>
		);
	}
}

export default Main;
