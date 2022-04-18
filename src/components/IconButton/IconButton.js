import React from 'react';
import './IconButton.scss';
export default function IconButton({ aria_label, size = 'medium', ...props }) {
  return (
    <button className={`icon-btn ${props.name}`} onClick={props.onClick}>
      <i className={aria_label + ` text-${size}`}></i>
    </button>
  );
}
