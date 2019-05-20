import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  isValidPassword() {
    return this.state.password === this.state.passwordConfirmation;
  }

  handleInputChange(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Basic form with password validation</h2>
        </div>
        <p className="App-intro">
          <form action="some-backend-action">
            <input 
              value={this.state.name}
              placeholder="name"
              onChange={() => this.handleInputChange('name', event.target.value)}
            />
            <input 
              value={this.state.password} 
              placeholder="password"
              type="password"
              onChange={() => this.handleInputChange('password', event.target.value)}
            />
            <input 
              value={this.state.passwordConfirmation}
              placeholder="confirm password"
              type="password"
              onChange={() => this.handleInputChange('passwordConfirmation', event.target.value)} 
            />
          </form>
        </p>
        <p>
          {this.isValidPassword() ? "passwords match" : "passwords do not match"}
        </p>
      </div>
    );
  }
}

export default App;
