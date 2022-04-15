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
}) {
  return !href ? (
    <button
      className={variant + ` text-${color}`}
      disabled={disabled}
      href={href}
      type={type}
      onClick={onClick}
    >
      <span style={{ fontSize: size }}>{children}</span>
    </button>
  ) : (
    <NavLink className={variant + ` text-${color}`} to={href} role="button">
      <span style={{ fontSize: size }}>{children}</span>
    </NavLink>
  );
}
