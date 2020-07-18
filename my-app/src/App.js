import React from 'react';
//import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './component/NavigationBar';
import Sidebar from './component/Sidebar';
import {Logindetail} from './component/logindetail';
// import firebase, { auth, provider } from './firebase.js';

import { Home } from './Home';
import { About } from './About';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
    }
  }
  render(){
      return (
        <React.Fragment>
        <Router>
          <Sidebar/>
          <NavigationBar />
          <Logindetail/>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                
                {/* <Route path="/login" component={Login} /> */}
              </Switch>
              
        </Router>
      </React.Fragment>
      
      );
    }
}


export default App;
