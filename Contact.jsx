import React from 'react';
import Links from './Links.jsx';

import axios from 'axios';

class Contact extends React.Component {
    
    constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.getUsers = this.getUsers.bind(this);
    this.save = this.save.bind(this);
    this.state = {employees: []};
  }
    // method to get users.
    getUsers(){
        
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('response:',response.data);
            	this.setState({
                    employees: response.data
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    
    save(e){
        e.preventDefault();
        const formData = {};
        for (const field in this.refs){
            formData[field] = this.refs[field].value;
        }

        axios({
            method: 'post',
            url: 'http://jsonplaceholder.typicode.com/posts',
            data: {
                title: formData.title,
                body: 'bar',
                userId: 1
            } 
        }).then(response => {
            console.log('response:',response.data);
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }
    
    // on load od component this method will be called.
    componentDidMount() {
        this.getUsers();
  }
    
   render() {
      return (
         <div>
              <Links></Links>
              <div className="container">
                  <h1>Users...</h1>
                  <br></br>
                  <input className="form-control" type="text" placeholder="Enter title" ref="title"></input><br></br>
                  <button type="button" className="btn btn-default" onClick={this.save}>Add</button>
                  <hr></hr>
                  
                  <table className="table table-bordered">
                      <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.state.employees.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                            )}
                        
                      </tbody>
                  </table>
              </div>
         </div>
      )
   }
}

export default Contact;