import React, { Component } from 'react';
import './About.css';
import { timeline } from '../../Data/ProjectData';
// import {Timeline} from '../../Timeline/Timeline'

class About extends Component {
  constructor() {
    super();
    this.state = {
      showTimeLine: '',
      showImage: ''
    };
  }

  handleHover = (event, str, title) => {
    event.preventDefault();
    if (str === 'show') {
      this.setState({ showImage: title });
    } else {
      this.setState({ showImage: '' });
    }
  };

  handleClick = (event, identifier, title) => {
    event.preventDefault();
    if (identifier) {
      this.setState({ showTimeLine: title, showImage: title });
    }
  };

  displayTimeline = () => {
    return timeline.map(period => {
      return (
        <li
          onMouseEnter={event => this.handleHover(event, 'show', period.title)}
          onMouseLeave={event => this.handleHover(event, 'hide', period.title)}
          className={
            this.state.showTimeLine !== period.title
              ? `${period.title}`
              : `${period.title}-active`
          }
          onClick={event => this.handleClick(event, period.extra, period.title)}
        >
          <span />
          <p className="title">{period.title}</p>
          <p className="name">{period.name}</p>
          {(this.state.showImage === period.title ||
            this.state.showTimeLine === period.title) && (
            <img className={`image-${period.title}`} src={period.img} />
          )}
          <p className="location">{period.details}</p>
          <div class="time">
            <span>{period.startYear}</span>
            <span>{period.endYear}</span>
          </div>
        </li>
      );
    });
  };

  displaySubTimeline = () => {
    let subTimeline;

    timeline.forEach(period => {
      if (period.extra) {
        subTimeline = period.extra.map(unit => {
          return (
            <section className="past-details">
              <span />
              <p className="sub-title">{unit.title}</p>
              <p className="sub-location">{unit.location}</p>
              <p className="sub-description">{unit.description}</p>
              <p className="sub-body">{unit.body} </p>
              <div className="sub-time">
                <span>{unit.startYear}</span>
                <span>{unit.endYear}</span>
              </div>
            </section>
          );
        });
      }
    });
    return subTimeline;
  };

  render() {
    return (
      <section className="about-container">
        <ul>{this.displayTimeline()}</ul>
        {this.state.showTimeLine && (
          <div className="sub">{this.displaySubTimeline()}</div>
        )}
      </section>
    );
  }
}

export default About;
