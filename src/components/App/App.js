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

  handleClick = str => {
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
            <i class="fas fa-bars" onClick={() => this.handleClick('show')} />
          )}
          {!hamburgerButton && (
            <i class="fas fa-times" onClick={() => this.handleClick('hide')} />
          )}
          {!hamburgerButton && <NavBar handleClick={this.handleClick} />}
        </header>
        <main>
          <h1 className="me">Paul Kim</h1>
          <ContentRoutes />
        </main>
      </div>
    );
  }
}

export default App;
