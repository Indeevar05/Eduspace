import React from 'react';
import './RadioGroup.css';

const RadioGroup = ({ label, options, name, required, value, onChange }) => {
  return (
    <div className="radio-group-wrapper">
      <label className="radio-group-label">
        {label} {required && <span className="required-asterisk">*</span>}
      </label>
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="radio-input"
            />
            <span className="radio-custom"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
