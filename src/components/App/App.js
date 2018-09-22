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

  componentDidUpdate() {
    console.log(this.state);
  }

  handleHover = str => {
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
            <i class="fas fa-bars" onClick={() => this.handleHover('show')} />
          )}
          {!hamburgerButton && (
            <i
              class="far fa-window-close"
              onClick={() => this.handleHover('hide')}
            />
          )}
          {!hamburgerButton && <NavBar handleHover={this.handleHover} />}
        </header>
        <main>
          <h1>Paul Kim</h1>
          <ContentRoutes />
        </main>
      </div>
    );
  }
}

export default App;
