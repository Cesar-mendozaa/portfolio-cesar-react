import React from "react";

function ProjectsCard({ img, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img src={img} alt={`${h3} logo`} className="hover" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectsCard;
