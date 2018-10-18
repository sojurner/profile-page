import React from 'react';
import Modal from 'react-responsive-modal';

export const ProjectModal = ({ onCloseModal, comp, redirectLink, open }) => {
  console.log(comp.title);
  return (
    <div>
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
  );
};
