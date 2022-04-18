import React from 'react';
import './CheckBox.scss';
export default function CheckBox({ label, ...props }) {
  return (
    <div className="checkbox">
      <input type="checkbox" name={props.name} id={props.name} />
      <label htmlFor={props.name}>{label}</label>
    </div>
  );
}
