import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  state = {
    iconDescription: ''
  };

  handleHover = (event, iconDescription) => {
    event.preventDefault();
    return iconDescription
      ? this.setState({ iconDescription })
      : this.setState({ iconDescription });
  };

  render() {
    const redirectLink = (event, link) => {
      event.preventDefault();
      window.location = link;
    };
    return (
      <section className="contact-info">
        <i
          class="fab fa-github-alt"
          onMouseEnter={event => this.handleHover(event, 'Github')}
          onMouseLeave={event => this.handleHover(event, '')}
          onClick={event =>
            redirectLink(event, 'https://www.github.com/sojurner')
          }
        />

        <i
          class="fab fa-linkedin"
          onMouseEnter={event => this.handleHover(event, 'Linkedin')}
          onMouseLeave={event => this.handleHover(event, '')}
          onClick={event =>
            redirectLink(event, 'https://www.linkedin.com/in/paulkim-sojurner/')
          }
        />
        <i
          class="fas fa-envelope"
          onMouseEnter={event => this.handleHover(event, 'Email')}
          onMouseLeave={event => this.handleHover(event, '')}
          onClick={event => redirectLink(event, 'https://pkim.youcanbook.me/')}
        />
        {this.state.iconDescription && (
          <h4 className="icon-description">{this.state.iconDescription}</h4>
        )}

        {/* <iframe
          src="https://drive.google.com/file/d/1H1IJSZ1ilu9KdvDdHCFRBB25vLDnlxms/view"
          style="width: 100%;height: 100%;border: none;"
        /> */}
      </section>
    );
  }
}

export default Contact;
