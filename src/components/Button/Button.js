import styled from '@emotion/styled';
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
    transition: 'all .25s',
    cursor: 'pointer',
  },
  ({ fullWidth, radius, variant, color }) => ({
    width: fullWidth ? '100%' : 'auto',
    borderRadius: radius || 0,
    // contained
    ...(variant === 'contained' && {
      ...(color === 'primary' && {
        backgroundColor: '#22ab59',
        border: '1px solid #22ab59',
        ':hover': {
          backgroundColor: '#1e964e',
          border: '1px solid #1e964e',
        },
      }),
      color: '#fff',
      ...(color === 'success' && {
        backgroundColor: '#15d164',
        border: '1px solid #15d164',
      }),
      ...(color === 'error' && {
        backgroundColor: 'tomato',
        border: '1px solid tomato',
      }),
    }),
    // outlined
    ...(variant === 'outlined' && {
      border: '1px solid #22ab59',
      color: '#22ab59',
      ...(color === 'success' && {
        color: '#15d164',
        border: '1px solid #15d164',
      }),
      ...(color === 'error' && {
        color: 'tomato',
        border: '1px solid tomato',
      }),
    }),
    // default
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: '#15d164',
      }),
      ...(color === 'error' && {
        color: 'tomato',
      }),
      ...(color === 'info' && {
        color: 'blue',
      })
    }),
  })
);

const Button = forwardRef(
  ({ children, variant, size, color, fullWidth, ...props }, ref) => (
    <ButtonRoot
      ref={ref}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      {...props}
    >
      {children}
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
