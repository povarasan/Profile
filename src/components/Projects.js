import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Fitness App</h3>
        <p>Developed UI, integrated APIs, implemented authentication, and push notifications. Available on Google PlayStore and Apple Store.</p>
        <a href="[Link to App]" target="_blank" rel="noopener noreferrer">View App</a>
      </div>
      <div className="project">
        <h3>Medicine Order and Delivery App</h3>
        <p>Worked on UI development, API integration, and bug resolution. Available on Google PlayStore and Apple Store.</p>
        <a href="[Link to App]" target="_blank" rel="noopener noreferrer">View App</a>
      </div>
      <div className="project">
        <h3>Challenge Oriented App</h3>
        <p>Implemented UI, API calling, and integrated push notifications.</p>
      </div>
    </section>
  );
};

export default Projects;
