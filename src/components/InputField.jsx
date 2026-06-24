import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ label, type = 'text', placeholder, required, value, onChange, name }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`input-wrapper ${focused ? 'focused' : ''}`}>
      <label className="input-label">
        {label} {required && <span className="required-asterisk">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input-field"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
