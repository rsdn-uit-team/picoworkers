import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const ButtonRoot = styled.button(
  {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '12px 20px',
    color: 'var(--primary)',
    fontSize: 14,
    lineHeight: 1.3,
    textAlign: 'center',
    fontFamily: 'inherit',
    transition: 'all .25s',
    cursor: 'pointer',
    ':hover': {
      color: 'var(--primaryHover)',
    },
  },
  ({ color, size, variant, fullWidth, radius, disabled }) => ({
    width: fullWidth ? '100%' : 'auto',
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
        ':hover': {
          color: 'var(--primaryHover)',
        },
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        ':hover': {
          color: 'var(--red)',
        },
      }),
      ...(color === 'info' && {
        color: 'var(--blue)',
        ':hover': {
          color: 'var(--blueLight)',
        },
      }),
      ...(color === 'secondary' && {
        color: 'var(--secondary)',
        ':hover': {
          color: 'var(--gray)',
        },
      }),
      ...(color === 'inherit' && {
        color: 'inherit',
        ':hover': {
          color: 'var(--black)',
        },
      }),
    }),
    ...(variant === 'contained' && {
      ...(color === 'primary' && {
        backgroundColor: 'var(--primary)',
        border: '1px solid var(--primary)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--primaryHover)',
          border: '1px solid var(--primaryHover)',
          color: 'var(--white)',
        },
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--success)',
        border: '1px solid var(--success)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--primaryHover)',
          border: '1px solid var(--primaryHover)',
          color: 'var(--white)',
        },
      }),
      ...(color === 'secondary' && {
        backgroundColor: 'var(--secondary)',
        border: '1px solid var(--secondary)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--gray)',
          border: '1px solid var(--gray)',
          color: 'var(--white)',
        },
      }),
      ...(color === 'info' && {
        backgroundColor: 'var(--blue)',
        border: '1px solid var(--blue)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--blueLight)',
          border: '1px solid var(--blueLight)',
          color: 'var(--white)',
        },
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--danger)',
        border: '1px solid var(--danger)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--red)',
          border: '1px solid var(--red)',
          color: 'var(--white)',
        },
      }),
      ...(color === 'inherit' && {
        backgroundColor: 'var(--default)',
        border: '1px solid var(--default)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--black)',
          border: '1px solid var(--black)',
          color: 'var(--white)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--primary)',
      color: 'var(--primary)',
      ':hover': {
        border: '1px solid var(--primaryHover)',
        color: 'var(--primaryHover)',
      },
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
        ':hover': {
          border: '1px solid var(--primaryHover)',
          color: 'var(--primaryHover)',
        },
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        border: '1px solid var(--danger)',
        ':hover': {
          border: '1px solid var(--red)',
          color: 'var(--red)',
        },
      }),
      ...(color === 'info' && {
        color: 'var(--blue)',
        border: '1px solid var(--blue)',
        ':hover': {
          border: '1px solid var(--blueLight)',
          color: 'var(--blueLight)',
        },
      }),
      ...(color === 'secondary' && {
        color: 'var(--secondary)',
        border: '1px solid var(--secondary)',
        ':hover': {
          border: '1px solid var(--gray)',
          color: 'var(--gray)',
        },
      }),
      ...(color === 'inherit' && {
        color: 'inherit',
        border: '1px solid var(--default)',
        ':hover': {
          border: '1px solid var(--black)',
          color: 'var(--black)',
        },
      }),
    }),
    ...(size === 'small' && {
      fontSize: 12,
      padding: '6px 8px',
    }),
    ...(size === 'medium' && {
      fontSize: 13,
      padding: '8px 20px',
      '@media(max-width: 992px)': {
        padding: '6px 8px',
      },
    }),
    ...(size === 'large' && {
      fontSize: 14,
      padding: '12px 20px',
    }),
    ...(disabled && {
      cursor: 'no-drop',
      opacity: 0.5,
    }),
  })
);

const StartIconWrapper = styled('span')`
  margin-right: 10px;
`;
const EndIconWrapper = styled('span')`
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
      fullWidth,
      radius,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => (
    <ButtonRoot
      ref={ref}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      radius={radius}
      {...props}
    >
      {startIcon && <StartIconWrapper>{startIcon}</StartIconWrapper>}
      <span>{children}</span>
      {endIcon && <EndIconWrapper>{endIcon}</EndIconWrapper>}
    </ButtonRoot>
  )
);

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'contained', 'outlined']),
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
};
export default Button;
