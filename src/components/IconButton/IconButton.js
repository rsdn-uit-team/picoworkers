import { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const IconButtonRoot = styled.button(
  {
    fontSize: 24,
    lineHeight: 1,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '0.3rem 0.4rem',
    color: 'var(--colorIcon)',
    cursor: 'pointer',
    textAlign: 'center',
    ':hover': {
      color: 'var(--primary)',
    },
    i: {
      width: 24,
    },
  },
  ({ variant, color, size, margin, radius }) => ({
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
        ':hover': {
          color: 'var(--buttonHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        ':hover': {
          color: 'var(--buttonHover)',
        },
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        ':hover': {
          color: 'var(--red)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--colorIcon)',
      ':hover': {
        border: '1px solid var(--primary)',
      },
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
        ':hover': {
          color: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        border: '1px solid var(--primary)',
        ':hover': {
          color: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
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
    }),
    ...(size === 'small' && {
      fontSize: 20,
      padding: '0.1rem 0.2rem',
      i: {
        width: 20,
      },
    }),
    ...(size === 'medium' && {
      fontSize: 24,
      padding: '0.3rem 0.4rem',
      i: {
        width: 24,
      },
    }),
    ...(size === 'large' && {
      fontSize: 28,
      padding: '20px',
      i: {
        width: 28,
      },
    }),
    ...(margin === 'ml-auto' && {
      marginLeft: 'auto',
    }),
    ...(margin === 'mr-auto' && {
      marginRight: 'auto',
    }),
  })
);
const LinkRoot = styled(({ children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
))(
  {
    fontSize: 24,
    lineHeight: 1,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    outline: 'none',
    padding: '0.3rem 0.4rem',
    color: 'var(--colorIcon)',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    ':hover': {
      color: 'var(--primary)',
    },
    i: {
      width: 24,
    },
  },
  ({ variant, color, size, margin, radius }) => ({
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(color === 'success' && {
        color: 'var(--success)',
        ':hover': {
          color: 'var(--buttonHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        ':hover': {
          color: 'var(--buttonHover)',
        },
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        ':hover': {
          color: 'var(--red)',
        },
      }),
    }),
    ...(variant === 'outlined' && {
      border: '1px solid var(--colorIcon)',
      ':hover': {
        border: '1px solid var(--primary)',
      },
      ...(color === 'success' && {
        color: 'var(--success)',
        border: '1px solid var(--success)',
        ':hover': {
          color: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
        },
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        border: '1px solid var(--primary)',
        ':hover': {
          color: 'var(--buttonHover)',
          border: '1px solid var(--buttonHover)',
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
    }),
    ...(size === 'small' && {
      fontSize: 20,
      padding: 'calc(0.1rem - 2px) 0.2rem',
      i: {
        width: 20,
      },
    }),
    ...(size === 'medium' && {
      fontSize: 24,
      padding: 'calc(0.3rem - 2px) 0.4rem',
      i: {
        width: 24,
      },
    }),
    ...(size === 'large' && {
      fontSize: 28,
      padding: '18px 20px',
      i: {
        width: 28,
      },
    }),
    ...(margin === 'ml-auto' && {
      marginLeft: 'auto',
    }),
    ...(margin === 'mr-auto' && {
      marginRight: 'auto',
    }),
  })
);
const IconButton = forwardRef(
  ({ variant, color, size, margin, children, radius, ...props }, ref) =>
    props.to ? (
      <LinkRoot
        variant={variant}
        color={color}
        size={size}
        margin={margin}
        radius={radius}
        ref={ref}
        {...props}
      >
        {children}
      </LinkRoot>
    ) : (
      <IconButtonRoot
        variant={variant}
        color={color}
        size={size}
        margin={margin}
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
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  margin: PropTypes.oneOf(['ml-auto', 'mr-auto']),
  radius: PropTypes.number,
};
IconButton.defaultProps = {
  variant: 'default',
  size: 'medium',
};
export default IconButton;
