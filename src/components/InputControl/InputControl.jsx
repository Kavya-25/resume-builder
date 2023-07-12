import React from "react";
import "./InputControl.scss";

export const InputControl = ({ label, ...props }) => {
  return (
    <div className="inputcontrol">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
};
