import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const ButtonRoot = styled.button(
  {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '12px 20px',
    color: '#22ab59',
    fontSize: 14,
    fontFamily: 'inherit',
    transition: 'all .25s',
    cursor: 'pointer',
  },
  ({ color, size, variant, fullWidth, radius, padding, disabled }) => ({
    width: fullWidth ? '100%' : 'auto',
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
      }),
      ...(color === 'info' && {
        color: 'var(--blue)',
      }),
    }),
    ...(variant === 'contained' && {
      ...(color === 'primary' && {
        backgroundColor: 'var(--primary)',
        border: '1px solid var(--primary)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--success)',
        border: '1px solid var(--success)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--primary)',
      color: 'var(--primary)',
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        border: '1px solid var(--danger)',
      }),
    }),
    ...(size === 'small' && {
      fontSize: 12,
    }),
    ...(size === 'medium' && {
      fontSize: 14,
    }),
    ...(size === 'large' && {
      fontSize: 16,
    }),
    ...(padding === 'small' && {
      padding: '6px 8px',
    }),
    ...(padding === 'medium' && {
      padding: '8px 20px',
      '@media(max-width: 992px)': {
        padding: '6px 8px',
      },
    }),
    ...(padding === 'large' && {
      padding: '12px 20px',
    }),
    ...(disabled && {
      cursor: 'no-drop',
      opacity: 0.5,
    }),
  })
);

const LinkRoot = styled(({ fullWidth, children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
))(
  {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '12px 20px',
    color: '#22ab59',
    fontSize: 14,
    transition: 'all .25s',
    cursor: 'pointer',
  },
  ({ color, size, variant, fullWidth, radius, padding, disabled }) => ({
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
      }),
      ...(color === 'info' && {
        color: 'var(--blue)',
      }),
    }),
    ...(variant === 'contained' && {
      ...(color === 'primary' && {
        backgroundColor: 'var(--primary)',
        border: '1px solid var(--primary)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--success)',
        border: '1px solid var(--success)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--primary)',
      color: 'var(--primary)',
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        border: '1px solid var(--danger)',
      }),
    }),
    ...(size === 'small' && {
      fontSize: 12,
    }),
    ...(size === 'medium' && {
      fontSize: 14,
    }),
    ...(size === 'large' && {
      fontSize: 16,
    }),
    ...(padding === 'small' && {
      padding: '6px 8px',
    }),
    ...(padding === 'medium' && {
      padding: '8px 20px',
    }),
    ...(padding === 'large' && {
      padding: '12px 20px',
    }),
    ...(disabled && {
      cursor: 'no-drop',
      opacity: 0.5,
    }),
  })
);
const StartIcon = styled('i')`
  margin-right: 10px;
`;
const EndIcon = styled('i')`
  margin-left: 10px;
`;
const Button = forwardRef(
  (
    {
      variant,
      children,
      size,
      disabled,
      color,
      padding,
      fullWidth,
      radius,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) =>
    !props.to ? (
      <ButtonRoot
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        padding={padding}
        radius={radius}
        {...props}
      >
        {startIcon ? <StartIcon>{startIcon}</StartIcon> : <></>}
        {children}
        {endIcon ? <EndIcon>{endIcon}</EndIcon> : <></>}
      </ButtonRoot>
    ) : (
      <LinkRoot
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        padding={padding}
        disabled={disabled}
        radius={radius}
        {...props}
      >
        {startIcon ? <StartIcon>{startIcon}</StartIcon> : <></>}
        {children}
        {endIcon ? <EndIcon>{endIcon}</EndIcon> : <></>}
      </LinkRoot>
    )
);

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'contained', 'outlined']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'inherit',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  radius: PropTypes.number,
};
Button.defaultProps = {
  variant: 'default',
  color: 'primary',
  size: 'medium',
  fullWidth: false,
  padding: 'medium',
};
export default Button;
