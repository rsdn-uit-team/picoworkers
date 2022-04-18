import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const ButtonField = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid transparent;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  &.text {
    border: 1px solid transparent;
    background-color: transparent;
  }
  &.contained {
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }
  &.outlined {
    border: 1px solid var(--light);
    color: var(--light);
    background-color: transparent;
  }
  &.text-primary {
    color: var(--primary);
  }
  &.text-success {
    color: var(--success);
  }
  &.contained.text-primary {
    background-color: var(--primary);
    color: var(--white);
  }
  &.contained.text-success {
    background-color: var(--success);
    color: var(--white);
  }
  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
  &.text-medium {
    padding: 8px 20px;
    span {
      font-size: 13px;
    }
  }
  &.text-large {
    padding: 12px 20px;
    span {
      font-size: 14px;
    }
  }
  &.content__button {
    margin-top: 24px;
    width: 100%;
    &:hover {
      background-color: var(--buttonHover);
    }
  }
`;
const LinkRoot = styled(({ children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
))`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid transparent;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  line-height: 1.33333;
  &.text {
    border: 1px solid transparent;
    background-color: transparent;
  }
  &.contained {
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }
  &.outlined {
    border: 1px solid var(--light);
    color: var(--light);
    background-color: transparent;
  }
  &.text-primary {
    color: var(--primary);
  }
  &.text-success {
    color: var(--success);
  }
  &.contained.text-primary {
    background-color: var(--primary);
    color: var(--white);
  }
  &.contained.text-success {
    background-color: var(--success);
    color: var(--white);
  }
  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }
  &.text-medium {
    padding: 8px 20px;
    font-size: 13px;
  }
  &.text-large {
    padding: 12px 20px;
    font-size: 14px;
  }
  &.content__button {
    margin-top: 24px;
    width: 100%;
    &:hover {
      background-color: var(--buttonHover);
    }
  }
`;
export default function Button({
  href,
  variant,
  children,
  size = 'medium',
  disabled = false,
  color = 'primary',
  ...props
}) {
  return !props.to ? (
    <ButtonField
      className={variant + ` text-${color} text-${size}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonField>
  ) : (
    <LinkRoot className={variant + ` text-${color} text-${size}`} {...props}>
      {children}
    </LinkRoot>
  );
}