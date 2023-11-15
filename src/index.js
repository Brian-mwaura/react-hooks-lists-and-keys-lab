import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';

function NavBar() {
  const links = ['home', 'about', 'projects'];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} technologies={project.technologies} />
      ))}
    </div>
  );
}

function ProjectItem({ technologies }) {
  return (
    <div>
      <h3>Project Title</h3>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const projects = [
    { id: 1, technologies: ['React', 'JavaScript'] },
    { id: 2, technologies: ['Vue', 'JavaScript'] },
    { id: 3, technologies: ['Angular', 'TypeScript'] },
  ];

  return (
    <div>
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;