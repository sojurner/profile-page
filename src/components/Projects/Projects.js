import React, { Component } from 'react';
import { ProjectDetails } from '../ProjectDetails/ProjectDetails';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      type: ''
    };
  }

  componentDidUpdate() {
    console.log(this.state.display);
  }

  handleMouseEvent = (event, str) => {
    event.preventDefault();
    if (str.includes('show')) {
      this.setState({ display: true });
    } else {
      this.setState({ display: false });
    }
    const type = str.slice(4);
    this.setState({ type });
  };

  redirectLink = (event, link) => {
    event.preventDefault();
    window.location = link;
  };

  displayHeaders = () => {
    const projectList = [
      'Vanilla JS',
      'React',
      'React/Redux',
      'Static Compositions'
    ];
    const project = projectList.map((projectType, index) => {
      return (
        <section
          className={
            this.state.type !== projectType && this.state.display
              ? `project-type ${projectType} active`
              : `project-type ${projectType} `
          }
          key={`${projectType}-${index}`}
          onClick={event => this.handleMouseEvent(event, `show${projectType}`)}
        >
          <h3>{projectType}</h3>
          <p>lorem ipsum</p>
          {this.state.display &&
            this.state.type === projectType && (
              <div className={`project-container ${projectType}`}>
                <ProjectDetails
                  handleMouseEvent={this.handleMouseEvent}
                  redirectLink={this.redirectLink}
                  projectType={this.state.type}
                />
              </div>
            )}
        </section>
      );
    });
    return <div>{project}</div>;
  };

  render() {
    return <div>{this.displayHeaders()}</div>;
  }
}

export default Projects;
