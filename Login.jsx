import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import history from './history.jsx';

import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

import style from './app.css';
//import bootstyles from './style.css';

class Login extends React.Component {
    constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.loginClicked = this.loginClicked.bind(this);
  }
    loginClicked(e){
        e.preventDefault();
//        alert("login");
        console.log("login clicked");
        const formData = {};
            for (const field in this.refs){
                formData[field] = this.refs[field].value;
            }
        console.log('---->', JSON.stringify(formData));
        if(formData.userName == 'mani' || formData.userName == 'ashik'){
            history.push('/home');
        }else{
            alert("invalid user");
        }
    }
   render() {
      return (
         <div className="container">
              <div className={style.app}>
                  <h1>Login page</h1>
              <hr></hr>
              <form><div className="form-group">
                <label>User Name: </label><input type="text" placeholder ="Enter user name" ref="userName" className="form-control"></input><br></br>
                <label>Password: </label> <input type="password" placeholder ="Enter password" ref="password" className="form-control"></input><br></br>
                <button type="button" className="btn btn-default" onClick={this.loginClicked}>Login...</button></div>
              </form>
                  </div>
        </div>
          
      )
   }
}

export default Login;