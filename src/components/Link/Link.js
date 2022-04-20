import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const LinkRoot = styled(({ children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
))(
  {
    color: 'var(--primary)',
    textDecoration: 'underline',
    ':hover ': {
      color: 'var(--linkHover)',
      textDecoration: 'underline',
    },
  },
  ({ underline, color }) => ({
    ...(underline === 'none' && {
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'none',
      },
    }),
    ...(underline === 'hover' && {
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    }),
    ...(color === 'success' && {
      color: 'var(--success)',
      ...(underline === 'hover' && {
        ':hover ': {
          color: 'var(--linkHover)',
          textDecoration: 'underline',
        },
      }),
      ...(underline === 'always' && {
        ':hover': {
          textDecoration: 'underline',
          color: 'var(--linkHover)',
        },
      }),
      ...(underline === 'none' && {
        ':hover': {
          color: 'var(--linkHover)',
          textDecoration: 'none',
        },
      }),
    }),
    ...(color === 'error' && {
      color: 'var(--danger)',
      ...(underline === 'hover' && {
        ':hover': {
          textDecoration: 'underline',
          color: 'var(--red)',
        },
      }),
      ...(underline === 'always' && {
        ':hover': {
          textDecoration: 'underline',
          color: 'var(--red)',
        },
      }),
      ...(underline === 'none' && {
        ':hover': {
          color: 'var(--red)',
          textDecoration: 'none',
        },
      }),
    }),
  })
);
const Link = forwardRef(
  ({ variant, underline, color, children, ...props }, ref) => (
    <LinkRoot
      variant={variant}
      underline={underline}
      color={color}
      ref={ref}
      {...props}
    >
      {children}
    </LinkRoot>
  )
);
Link.propTypes = {
  variant: PropTypes.oneOf(['default']),
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  color: PropTypes.oneOf(['success', 'primary', 'error']),
};
Link.defaultProps = {
  variant: 'default',
  underline: 'always',
  color: 'primary',
};
export default Link;
