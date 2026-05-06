import React from "react";

const FormGroup = ({ type, label, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} name={label} placeholder={placeholder} />
    </div>
  );
};

export default FormGroup;
