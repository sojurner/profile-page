import React from 'react';
import { Motion, spring } from 'react-motion';

import './CurrentProject.css';

export const CurrentProject = ({
  selectedProject,
  handleClick,
  handleHover,
  nextProject,
  previousProject
}) => {
  return (
    <div className="img-container">
      {previousProject && (
        <img
          className={`img img-previous`}
          src={require(`../../Images/${previousProject.title}.gif`)}
          onClick={event => handleClick(event, previousProject.title)}
          onMouseEnter={event => handleHover(event, previousProject.title)}
          onMouseLeave={event => handleHover(event)}
          height="200"
          width="300"
        />
      )}
      <div className="current-container">
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(-20) }}>
          {container => (
            <Motion style={container}>
              {style => (
                <img
                  style={{
                    transform: `translateX(${style.x}px)`,
                    // transform: `skew(-10deg, -20deg)`,
                    opacity: style.opacity
                  }}
                  className={`img img-current`}
                  src={require(`../../Images/${selectedProject.title}.gif`)}
                  onClick={event => handleClick(event, selectedProject.title)}
                  onMouseEnter={event =>
                    handleHover(event, selectedProject.title)
                  }
                  onMouseLeave={event => handleHover(event)}
                  height="200"
                  width="300"
                />
              )}
            </Motion>
          )}
        </Motion>
      </div>

      {nextProject && (
        <img
          className={`img img-next`}
          src={require(`../../Images/${nextProject.title}.gif`)}
          onClick={event => handleClick(event, nextProject.title)}
          onMouseEnter={event => handleHover(event, nextProject.title)}
          onMouseLeave={event => handleHover(event)}
          height="200"
          width="300"
        />
      )}
    </div>
  );
};
