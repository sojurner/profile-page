import React from 'react';
import './Contact.css';

export const Contact = () => {
  const redirectLink = (event, link) => {
    event.preventDefault();
    window.location = link;
  };
  return (
    <section className="contact-info">
      <i
        class="fab fa-github-alt"
        onClick={event =>
          redirectLink(event, 'https://www.github.com/sojurner')
        }
      />
      <i
        class="fab fa-linkedin"
        onClick={event =>
          redirectLink(event, 'https://www.linkedin.com/in/paulkim-sojurner/')
        }
      />
      <i
        class="fas fa-envelope"
        onClick={event => redirectLink(event, 'https://pkim.youcanbook.me/')}
      />
    </section>
  );
};
