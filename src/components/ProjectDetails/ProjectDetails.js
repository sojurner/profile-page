import React from 'react';
import * as projects from '../../Data/ProjectData';
import './ProjectDetails.css';

export const ProjectDetails = ({ projectType, redirectLink }) => {
  const matchingType = projects.allProjects.filter(
    comp => comp.projectType === projectType
  );

  return matchingType.map(comp => {
    return (
      <div className={comp.title}>
        <h3>{comp.title}</h3>
        <p />
        <i
          class="fab fa-github"
          onClick={event => redirectLink(event, comp.githubURL)}
        />
        <i
          class="far fa-calendar"
          onClick={event => redirectLink(event, comp.githubPages)}
        />
        <img
          className={`img-${comp.title}`}
          src={require(`../../Images/${comp.title}SS.png`)}
          height="200"
          width="300"
        />
      </div>
    );
  });
};
