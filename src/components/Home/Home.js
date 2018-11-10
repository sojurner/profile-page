import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import './Home.css';

class Home extends Component {
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
      <div className="home-screen">
        <section className="contact-info">
          <span className="github-container">
            <i
              class="fab fa-github-alt"
              onMouseEnter={event => this.handleHover(event, 'Github')}
              onMouseLeave={event => this.handleHover(event, '')}
              onClick={event =>
                redirectLink(event, 'https://www.github.com/sojurner')
              }
            />
          </span>
          <span className="linkedin-container">
            <i
              class="fab fa-linkedin"
              onMouseEnter={event => this.handleHover(event, 'Linkedin')}
              onMouseLeave={event => this.handleHover(event, '')}
              onClick={event =>
                redirectLink(
                  event,
                  'https://www.linkedin.com/in/paulkim-sojurner/'
                )
              }
            />
          </span>
          <span className="email-container">
            <i
              class="fas fa-envelope"
              onMouseEnter={event => this.handleHover(event, 'Email')}
              onMouseLeave={event => this.handleHover(event, '')}
              onClick={event =>
                redirectLink(event, 'https://pkim.youcanbook.me/')
              }
            />
          </span>
          {this.state.iconDescription && (
            <h5 className="icon-description">{this.state.iconDescription} </h5>
          )}
        </section>
        <section className="quote">
          <Carousel
            autoplay={true}
            wrapAround={true}
            speed={2000}
            pauseOnHover={false}
          >
            <p>
              Great Minds Discuss <strong>Ideas</strong>
            </p>
            <p>
              Average Minds Discuss <strong>Events</strong>
            </p>
            <p>
              Small Minds Discuss <strong>People</strong>
            </p>
          </Carousel>
          <p className="author-quote">- Eleanor Roosevelt</p>
        </section>
      </div>
    );
  }
}

export default Home;
