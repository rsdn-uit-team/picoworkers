import { NavLink } from 'react-router-dom';
import './Button.scss';
export default function Button({
  href = null,
  variant = null,
  children = null,
  size = '13px',
  disabled = false,
  color = 'primary',
  type = 'submit',
  onClick = null,
  startIcon,
  endIcon,
  sizeIcon,
}) {
  return !href ? (
    <button
      className={variant + ` text-${color}`}
      disabled={disabled}
      href={href}
      type={type}
      onClick={onClick}
    >
      <i
        className={`start-icon ${startIcon}`}
        style={{ fontSize: sizeIcon }}
      ></i>
      <span style={{ fontSize: size }}>{children}</span>
      <i className={`end-icon ${endIcon}`} style={{ fontSize: sizeIcon }}></i>
    </button>
  ) : (
    <NavLink className={variant + ` text-${color}`} to={href} role="button">
      <i
        className={`start-icon ${startIcon}`}
        style={{ fontSize: sizeIcon }}
      ></i>
      <span style={{ fontSize: size }}>{children}</span>
      <i className={`end-icon ${endIcon}`} style={{ fontSize: sizeIcon }}></i>
    </NavLink>
  );
}
