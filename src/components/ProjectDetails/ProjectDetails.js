import React, { Component } from 'react';
import { allProjects } from '../../Data/ProjectData';
import Modal from 'react-responsive-modal';

import { ProjectModal } from '../ProjectModal/ProjectModal';

import './ProjectDetails.css';
import { CurrentProject } from '../CurrentProject/CurrentProject';
class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: '',
      showModal: '',
      open: false,
      currentIndex: 0,
      prevIndex: null,
      nextIndex: 1,
      selectedProjects: null
    };
  }

  async componentDidMount() {
    const { projectType } = this.props;
    const selectedProjects = allProjects.filter(
      comp => comp.projectType === projectType
    );

    await this.setState({ selectedProjects: selectedProjects });
    console.log(this.state.selectedProjects);
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
    console.log(title);
    this.onOpenModal();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  selectCurrent = (event, index) => {
    event.preventDefault();
    this.setState({
      currentIndex: index,
      nextIndex: index + 1,
      prevIndex: index - 1
    });
  };

  goToPrevious = () => {
    if (this.state.currentIndex > 0) {
      this.setState(previousState => ({
        currentIndex: previousState.currentIndex - 1,
        nextIndex: previousState.currentIndex,
        prevIndex: previousState.currentIndex - 2
      }));
    }
  };

  goToNext = () => {
    const { currentIndex, selectedProjects } = this.state;
    if (currentIndex < selectedProjects.length - 1) {
      this.setState(previousState => ({
        currentIndex: previousState.currentIndex + 1,
        nextIndex: previousState.currentIndex + 2,
        prevIndex: previousState.currentIndex
      }));
    }
  };

  createBtns = () => {
    const { selectedProjects, currentIndex } = this.state;
    return selectedProjects.map((project, index) => {
      return (
        <span
          className={currentIndex === index ? `dot dot-active` : `dot`}
          onClick={event => this.selectCurrent(event, index)}
        />
      );
    });
  };

  render() {
    const { selectedProjects, currentIndex, nextIndex, prevIndex } = this.state;
    if (selectedProjects) {
      return (
        <div>
          <div className={`project-card`}>
            <div
              className={
                !currentIndex
                  ? `slider-wrapper nav-left`
                  : `slider-wrapper nav-left nav-left-active right-left-active`
              }
              onClick={this.goToPrevious}
            />
            <CurrentProject
              currentIndex={currentIndex}
              handleHover={this.handleHover}
              handleClick={this.handleClick}
              selectedProject={selectedProjects[currentIndex]}
              nextProject={selectedProjects[nextIndex]}
              previousProject={selectedProjects[prevIndex]}
            />
            <div
              className={
                currentIndex < selectedProjects.length - 1
                  ? `slider-wrapper nav-right nav-right-active right-left-active`
                  : `slider-wrapper nav-right`
              }
              onClick={this.goToNext}
            />
          </div>
          {this.createBtns()}

          {this.state.showDescription ===
            selectedProjects[currentIndex].title && (
            <h3 className="click-directions">Click to View</h3>
          )}
          {this.state.showModal === selectedProjects[currentIndex].title && (
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <ProjectModal
                comp={selectedProjects[currentIndex]}
                onCloseModal={this.onCloseModal}
                redirectLink={this.props.redirectLink}
              />
            </Modal>
          )}
        </div>
      );
    } else {
      return <div>ds</div>;
    }
  }
}

export default ProjectDetails;
