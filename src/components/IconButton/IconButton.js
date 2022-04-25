import { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const IconButtonRoot = styled.button(
  {
    fontSize: 24,
    lineHeight: 1,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '0.3rem 0.4rem',
    color: 'var(--defaultIcon)',
    cursor: 'pointer',
    textAlign: 'center',
    ':hover': {
      color: 'var(--primary)',
    },
  },
  ({ variant, color, size, radius }) => ({
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
        ':hover': {
          color: 'var(--primaryHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
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
      ...(color === 'inherit' && {
        color: 'var(--default)',
        ':hover': {
          color: 'var(--black)',
        },
      }),
    }),
    ...(variant === 'contained' && {
      backgroundColor: 'var(--defaultIcon)',
      border: '1px solid var(--defaultIcon)',
      color: 'var(--white)',
      ':hover': {
        backgroundColor: 'var(--primary)',
        color: 'var(--white)',
        border: '1px solid var(--primary)',
      },
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
      ...(color === 'primary' && {
        backgroundColor: 'var(--primary)',
        border: '1px solid var(--primary)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--primaryHover)',
          color: 'var(--white)',
          border: '1px solid var(--primaryHover)',
        },
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--danger)',
        border: '1px solid var(--danger)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--red)',
          color: 'var(--white)',
          border: '1px solid var(--red)',
        },
      }),
      ...(color === 'info' && {
        backgroundColor: 'var(--blue)',
        border: '1px solid var(--blue)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--blueLight)',
          color: 'var(--white)',
          border: '1px solid var(--blueLight)',
        },
      }),
      ...(color === 'inherit' && {
        backgroundColor: 'var(--default)',
        border: '1px solid var(--default)',
        color: 'var(--white)',
        ':hover': {
          backgroundColor: 'var(--black)',
          color: 'var(--white)',
          border: '1px solid var(--black)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--borderIcon)',
      ':hover': {
        border: '1px solid var(--borderIcon)',
        color: 'var(--defaultIcon)',
      },
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
        ':hover': {
          color: 'var(--primaryHover)',
          border: '1px solid var(--primaryHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        border: '1px solid var(--primary)',
        ':hover': {
          color: 'var(--primaryHover)',
          border: '1px solid var(--primaryHover)',
        },
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        border: '1px solid var(--danger)',
        ':hover': {
          color: 'var(--red)',
          border: '1px solid var(--red)',
        },
      }),
      ...(color === 'info' && {
        color: 'var(--blue)',
        border: '1px solid var(--blue)',
        ':hover': {
          color: 'var(--blueLight)',
          border: '1px solid var(--blueLight)',
        },
      }),
      ...(color === 'inherit' && {
        color: 'var(--default)',
        border: '1px solid var(--default)',
        ':hover': {
          color: 'var(--black)',
          border: '1px solid var(--black)',
        },
      }),
    }),
    ...(size === 'small' && {
      fontSize: 20,
      padding: '0.1rem 0.2rem',
    }),
    ...(size === 'medium' && {
      fontSize: 24,
      padding: '0.3rem 0.4rem',
    }),
    ...(size === 'large' && {
      fontSize: 28,
      padding: '20px',
    }),
  })
);
const IconButton = forwardRef(
  ({ variant, color, size, children, radius, ...props }, ref) => (
    <IconButtonRoot
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      ref={ref}
      {...props}
    >
      {children}
    </IconButtonRoot>
  )
);
IconButton.propTypes = {
  variant: PropTypes.oneOf(['default', 'contained', 'outlined']),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'error',
    'info',
    'inherit',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radius: PropTypes.number,
};
IconButton.defaultProps = {
  variant: 'default',
  size: 'medium',
};
export default IconButton;
