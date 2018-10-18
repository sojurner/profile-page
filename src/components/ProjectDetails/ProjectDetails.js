import React, { Component } from 'react';
import * as projects from '../../Data/ProjectData';

import { ProjectModal } from '../ProjectModal/ProjectModal';

import './ProjectDetails.css';
class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: '',
      showScreen: '',
      open: false
    };
  }

  handleHover = (event, title) => {
    event.preventDefault();
    if (title) {
      this.setState({ showDescription: title });
    } else {
      this.setState({ showDescription: '' });
    }
  };

  handleClick = (event, str, title) => {
    event.stopPropagation();
    this.onOpenModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    console.log('clicked');
    this.setState({ open: false });
  };

  render() {
    const { projectType, redirectLink } = this.props;
    const matchingType = projects.allProjects.filter(
      comp => comp.projectType === projectType
    );

    return matchingType.map(comp => {
      return (
        <div
          onMouseEnter={event => this.handleHover(event, comp.title)}
          onMouseLeave={event => this.handleHover(event)}
          className={`project-card ${comp.title}`}
          onClick={event => this.handleClick(event, 'show', comp.title)}
        >
          <img
            className={`img img-${comp.title}`}
            src={require(`../../Images/${comp.title}SS.png`)}
            height="200"
            width="300"
          />
          {/* {this.state.showDescription === comp.title && <h3>{comp.title}</h3>}
          {this.state.showScreen === comp.title &&
            this.state.showScreen !== '' && ( */}
          <ProjectModal onCloseModal={this.onCloseModal} />
        </div>
      );
    });
  }
}

export default ProjectDetails;
