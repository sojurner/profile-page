import React, { Component } from 'react';
import * as projects from '../../Data/ProjectData';
import Modal from 'react-responsive-modal';

import { ProjectModal } from '../ProjectModal/ProjectModal';

import './ProjectDetails.css';
import { totalmem } from 'os';
class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: '',
      showModal: '',
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

  handleClick = (event, title) => {
    event.stopPropagation();
    this.setState({ showModal: title });
    this.onOpenModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { projectType, redirectLink } = this.props;
    const matchingType = projects.allProjects.filter(
      comp => comp.projectType === projectType
    );

    return matchingType.map(comp => {
      return (
        <div>
          <div
            onMouseEnter={event => this.handleHover(event, comp.title)}
            onMouseLeave={event => this.handleHover(event)}
            className={`project-card ${comp.title}`}
            onClick={event => this.handleClick(event, comp.title)}
          >
            <img
              className={`img img-${comp.title}`}
              src={require(`../../Images/${comp.title}.gif`)}
              height="200"
              width="300"
            />
            {this.state.showDescription === comp.title && (
              <h3 className="click-directions">Click to View</h3>
            )}
          </div>
          {this.state.showModal === comp.title && (
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <ProjectModal
                comp={comp}
                onCloseModal={this.onCloseModal}
                redirectLink={redirectLink}
              />
            </Modal>
          )}
        </div>
      );
    });
  }
}

export default ProjectDetails;
