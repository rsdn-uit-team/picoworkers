import { NavLink } from 'react-router-dom';
import './Button.scss';
export default function Button({
  href,
  variant,
  children,
  size = 'medium',
  disabled = false,
  color = 'primary',
  ...props
}) {
  return !href ? (
    <button
      className={variant + ` text-${color} text-${size}`}
      disabled={disabled}
      type={props.type}
      onClick={props.onClick}
    >
      <span>{children}</span>
    </button>
  ) : (
    <NavLink
      className={variant + ` text-${color} text-${size}`}
      to={href}
      role="button"
    >
      <span>{children}</span>
    </NavLink>
  );
}
