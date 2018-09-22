import React from 'react'


export const StaticComps = () => {
const displayHeaders = () => {
  const projectList = [
    'Vanilla JS',
    'React',
    'React/Redux',
    'Static Compositions'
  ];
  const projects = projectList.map((projectType, index) => {
    return (
      <section
        key={`${projectType}-${index}`}
        onMouseEnter={() => this.handleMouseEvent('show')}
        onMouseLeave={() => this.handleMouseEvent('hide')}
      >
        <h3>{projectType}</h3>
        <p>lorem ipsum</p>
      </section>
    );
  
const displayComps = () => {
  const staticComps = projects.staticComps.map(comp => {
    return (
      <div>
        <h3>{comp.title}</h3>
        <i
          class="fab fa-github"
          onClick={event => this.redirectLink(event, comp.githubURL)}
        />
        <i
          class="fas fa-browser"
          onClick={event => this.redirectLink(event, comp.githubPages)}
        />
      </div>
    );
  });
  return <div>{staticComps}</div>;
}

return (
  <div>
    {displayHeaders}
    {displayComps}
  </div>
)
}