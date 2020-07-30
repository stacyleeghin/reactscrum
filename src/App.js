import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props){
    super(props)
  }
  render () {
    return (
      <div className="wrap">
          <div className="container">
              <div className="section1 title">
                  <h1>Project: Studio Deluxe</h1>
                  <h4>Sprint deadline: Aug 29, 2020</h4>
              </div>
              <div className="section2 scrum">
                  <h2>Scrum board</h2>
                  <div className="scrumboard">
                      <div className="cat tasks">
                          <h3>Tasks</h3>
                          <div className="form-group">
                              <label for="request">New request</label>
                              <input type="text" id="requestInput" name="request"/>
                              <label for="assign">Assign to:</label>
                              <input type="text" id="assignInput" name="assign"/>
                              <div className="date">
                                  <div className="start">
                                      <label for="start">Start Date:</label>
                                      <input type="text" id="startInput" name="start"/>
                                  </div>
                                  <div className="eta">
                                      <label for="ETA">ETA:</label>
                                      <input type="text" id="ETAInput" name="ETA"/>
                                  </div>
                              </div>
                              <button className="btn" type="submit"><i className="fas fa-plus"></i></button>
                          </div>
                      </div>
                      <div className="cat inprogress">
                          <h3>In Progress</h3>
                      </div>
                      <div className="cat testing">
                          <h3>Testing</h3>
                      </div>
                      <div className="cat done">
                          <h3>Done</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}  
  export default App;
  
 
  