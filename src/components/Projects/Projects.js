import React, { Component } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Modal from 'react-responsive-modal';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      type: '',
      logo: ''
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
    const { type, display, logo } = this.state;
    const projectList = {
      'Vanilla JS':
        'http://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png',
      React:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      'React/Redux':
        'https://cdn-images-1.medium.com/max/1200/1*VeM-5lsAtrrJ4jXH96h5kg.png',
      'HTML/CSS':
        'https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png'
    };

    const project = Object.keys(projectList).map((projectType, index) => {
      return (
        <tr
          key={`${projectType}-${index}`}
          onMouseEnter={e => this.showLogo(e, projectType)}
          onMouseLeave={this.hideLogo}
          onClick={event => this.handleMouseEvent(event, `show${projectType}`)}
        >
          <td
            className={
              type !== projectType && display
                ? `project-type ${projectType}`
                : `project-type-active ${projectType}`
            }
          >
            <img
              className={
                projectType === logo
                  ? 'project-logo-active'
                  : 'project-logo-hide'
              }
              src={projectList[projectType]}
            />
            <h3 className="project-type-header">{projectType}</h3>
          </td>
          {display && type === projectType && (
            <div className={`project-container ${projectType}`}>
              <ProjectDetails
                handleMouseEvent={this.handleMouseEvent}
                redirectLink={this.redirectLink}
                projectType={type}
              />
            </div>
          )}
        </tr>
      );
    });

    return (
      <table>
        <tbody>{project}</tbody>
      </table>
    );
  };

  showLogo = (e, logo) => {
    e.preventDefault();
    this.setState({ logo });
  };

  hideLogo = () => {
    this.setState({ logo: '' });
  };

  render() {
    return <div>{this.displayHeaders()}</div>;
  }
}

export default Projects;
