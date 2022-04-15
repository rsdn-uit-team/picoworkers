import React from 'react';
import './IconButton.scss';
export default function IconButton({
  aria_label,
  onClick = null,
  size = '14px',
  name = null,
}) {
  return (
    <button className={`icon-btn ${name}`} onClick={onClick}>
      <i className={aria_label} style={{ fontSize: size }}></i>
    </button>
  );
}
