import React from 'react';
import './CheckBox.scss';
export default function CheckBox({ name, label }) {
  return (
    <div className="checkbox">
      <input type="checkbox" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
