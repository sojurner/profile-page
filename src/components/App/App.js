import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { ContentRoutes } from '../ContentRoutes/ContentRoutes';

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      hamburgerButton: true
    };
  }

  handleClick = (event, str) => {
    event.preventDefault();
    str === 'show'
      ? this.setState({ hamburgerButton: false })
      : this.setState({ hamburgerButton: true });
  };

  render() {
    const { hamburgerButton } = this.state;
    return (
      <div className="App">
        <header className="header">
          {hamburgerButton && (
            <i
              class="fas fa-bars"
              onClick={event => this.handleClick(event, 'show')}
            />
          )}
          {!hamburgerButton && (
            <i
              class="fas fa-times"
              onClick={event => this.handleClick(event, 'leave')}
            />
          )}
          {!hamburgerButton && <NavBar handleClick={this.handleClick} />}
        </header>
        <main>
          <img
            src={require('../../Images/Paul-logo-1.png')}
            className="name-logo"
          />
          <ContentRoutes />
        </main>
      </div>
    );
  }
}

export default App;
