import React, { Component } from 'react';
import * as projects from '../../Data/ProjectData';
import './ProjectDetails.css';
import { Dialog } from 'kodhus-ui-react';
class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: '',
      showScreen: ''
    };
  }

  componentDidUpdate() {
    console.log(this.state.showScreen);
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
    if (str === 'show') {
      this.setState({ showScreen: title });
    } else {
      this.setState({ showScreen: '' });
    }
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
          {this.state.showDescription === comp.title && <h3>{comp.title}</h3>}
          {this.state.showScreen === comp.title &&
            this.state.showScreen !== '' && (
              <div className="modal">
                <i
                  class="far fa-window-close"
                  onClick={event => this.handleClick(event, 'close', '')}
                />
                <iframe
                  className="modal-gif"
                  src={require(`../../Images/${comp.title}.gif`)}
                />
                <h3>{comp.title}</h3>
                <p className="description">{comp.description}</p>
                <div>
                  <i
                    class="fab fa-github"
                    onClick={event => redirectLink(event, comp.githubURL)}
                  />
                  <i
                    class="fas fa-desktop"
                    onClick={event => redirectLink(event, comp.githubPages)}
                  />
                </div>
              </div>
            )}
        </div>
      );
    });
  }
}

export default ProjectDetails;
