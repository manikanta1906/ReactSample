import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import { Link } from 'react-router-dom'

import history from './history.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Login from './Login.jsx';


class App extends React.Component {
   render() {
      return (
         <Router history = {history}>
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
   </Router>
      )
   }
}

export default App;