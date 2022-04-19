import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const ButtonField = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: transparent;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
  ${(props) =>
    props.variant === 'text'
      ? 'border: 1px solid transparent;background-color: transparent;'
      : (props) =>
          props.variant === 'contained'
            ? 'border: 1px solid var(--primary);background-color: var(--primary);color: var(--white);'
            : (props) =>
                props.variant === 'outlined'
                  ? 'border: 1px solid var(--light);color: var(--light);background-color: transparent;'
                  : ''}
  ${(props) =>
    props.color === 'primary'
      ? 'color: var(--primary);'
      : props.color === 'success'
      ? 'color: var(--success);'
      : ''}
  ${(props) =>
    props.variant === 'contained' && props.color === 'primary'
      ? 'background-color: var(--primary);color: var(--white);'
      : props.variant === 'contained' && props.color === 'success'
      ? 'background-color: var(--success);color: var(--white);'
      : ''}
  ${(props) => (props.disabled ? 'cursor: no-drop;opacity: 0.5;' : '')}
  ${(props) =>
    props.size === 'medium'
      ? 'padding: 8px 20px;font-size: 13px;@media screen and (max-width: 992px) {padding: 6px 8px !important;}'
      : props.size === 'large'
      ? 'padding: 12px 20px;font-size: 14px;'
      : ''}
  ${(props) =>
    props.display === 'block'
      ? 'margin-top: 24px;width: 100%;&:hover{background-color: var(--buttonHover);}'
      : ''}
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
  ${(props) =>
    props.variant === 'text'
      ? 'border: 1px solid transparent;background-color: transparent;'
      : (props) =>
          props.variant === 'contained'
            ? 'border: 1px solid var(--primary);background-color: var(--primary);color: var(--white);'
            : (props) =>
                props.variant === 'outlined'
                  ? 'border: 1px solid var(--light);color: var(--light);background-color: transparent;'
                  : ''}
  ${(props) =>
    props.color === 'primary'
      ? 'color: var(--primary);'
      : props.color === 'success'
      ? 'color: var(--success);'
      : props.color === 'icon'
      ? 'color: var(--icon);&:hover{color:var(--primary);}'
      : ''}
  ${(props) =>
    props.variant === 'contained' && props.color === 'primary'
      ? 'background-color: var(--primary);color: var(--white);'
      : props.variant === 'contained' && props.color === 'success'
      ? 'background-color: var(--success);color: var(--white);'
      : ''}
  ${(props) => (props.disabled ? 'cursor: no-drop;opacity: 0.5;' : '')}
  ${(props) =>
    props.size === 'medium'
      ? 'padding: 8px 20px;font-size: 13px;@media screen and (max-width: 992px) {padding: 6px 8px !important;}'
      : props.size === 'large'
      ? 'padding: 12px 20px;font-size: 14px;i{font-size: 16px}'
      : ''}
  ${(props) =>
    props.display === 'block'
      ? 'margin-top: 24px;width: 100%;&:hover{background-color: var(--buttonHover);}'
      : ''}
`;
const StartIcon = styled('i')`
  margin-right: 10px;
`;
const EndIcon = styled('i')`
  margin-left: 10px;
`;
export default function Button({
  variant,
  children,
  size = 'medium',
  disabled = false,
  color = 'primary',
  display,
  startIcon,
  endIcon,
  ...props
}) {
  return !props.to ? (
    <ButtonField
      variant={variant}
      color={color}
      size={size}
      display={display}
      disabled={disabled}
      {...props}
    >
      {startIcon ? <StartIcon className={startIcon}></StartIcon> : <></>}
      {children}
      {endIcon ? <EndIcon className={endIcon}></EndIcon> : <></>}
    </ButtonField>
  ) : (
    <LinkRoot
      variant={variant}
      color={color}
      size={size}
      display={display}
      disabled={disabled}
      {...props}
    >
      {startIcon ? <StartIcon className={startIcon}></StartIcon> : <></>}
      {children}
      {endIcon ? <EndIcon className={endIcon}></EndIcon> : <></>}
    </LinkRoot>
  );
}
