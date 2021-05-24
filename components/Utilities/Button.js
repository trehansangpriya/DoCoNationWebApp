import React from "react";

const Button = ({ label, type, link }) => {
  return (
    <a href={link} className={`btn ` + type}>
      {label}
    </a>
  );
};

export default Button;
