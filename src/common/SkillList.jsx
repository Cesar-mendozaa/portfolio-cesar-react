import React from "react";

function SkillList({ img, skill }) {
  return (
    <span>
      <img src={img} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
