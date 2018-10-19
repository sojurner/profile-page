import React from 'react';
import './ProjectModal.css';

export const ProjectModal = ({ onCloseModal, comp, redirectLink, open }) => {
  return (
    <div>
      <h3 className="comp-title">{comp.title}</h3>
      <iframe
        className="modal-gif"
        src={require(`../../Images/${comp.title}.gif`)}
      />
      <p className="description">{comp.description}</p>
      <div className="link-icons">
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
  );
};
