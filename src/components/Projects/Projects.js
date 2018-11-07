import React, { Component } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Modal from 'react-responsive-modal';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      type: ''
    };
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
    const projectList = ['Vanilla JS', 'React', 'React/Redux', 'Static Comps'];
    const project = projectList.map((projectType, index) => {
      return (
        <tr
          className={
            this.state.type !== projectType && this.state.display
              ? `project-type ${projectType} `
              : `project-type-active ${projectType}`
          }
          key={`${projectType}-${index}`}
          onClick={event => this.handleMouseEvent(event, `show${projectType}`)}
        >
          <td>
            <h3 className="project-type-header">{projectType}</h3>
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
          </td>
        </tr>
      );
    });
    return (
      <table>
        <tbody>{project}</tbody>
      </table>
    );
  };

  render() {
    return <div>{this.displayHeaders()}</div>;
  }
}

export default Projects;
