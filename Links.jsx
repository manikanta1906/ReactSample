import React from 'react';
import App from './App.jsx';
import { Link } from 'react-router-dom';


class Links extends React.Component {
   render() {
       
      return (
        <div>  
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">React</a>
                    </div>
                    <div className="collapse navbar-collapse navbarCollapse" id="navbar-collapse-4">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Users</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul></div>
                </div>
            </nav>
        </div>
      )
   }
}

export default Links;