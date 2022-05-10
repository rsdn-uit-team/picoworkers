import { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ToggleWrapper = styled.label(
  {
    position: 'relative',
    display: 'inline-block',
    width: 44,
    height: 22,
  },
  ({ size }) => ({
    ...(size === 'large' && {
      width: 60,
      height: 30,
    }),
    ...(size === 'small' && {
      width: 34,
      height: 18,
    }),
  })
);
const InputRoot = styled.input(
  {
    opacity: 0,
    width: 0,
    height: 0,
    ':checked + span:before': {
      transform: 'translateX(22px)',
    },
  },
  ({ size }) => ({
    ...(size === 'large' && {
      ':checked + span:before': {
        transform: 'translateX(30px)',
      },
    }),
    ...(size === 'small' && {
      ':checked + span:before': {
        transform: 'translateX(16px)',
      },
    }),
  })
);
const SpanRoot = styled.span(
  {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'var(--borderCheckbox)',
    transition: '.4s',
    ':before': {
      position: 'absolute',
      content: '""',
      height: 18,
      width: 18,
      left: 2,
      bottom: 2,
      backgroundColor: 'var(--white)',
      transition: '.4s',
    },
  },
  ({ color, radius, size }) => ({
    ...(color === 'success' && {
      backgroundColor: 'var(--successLight)',
    }),
    ...(color === 'info' && {
      backgroundColor: 'var(--blueLight)',
    }),
    ...(color === 'error' && {
      backgroundColor: 'var(--dangerLight)',
    }),
    ...(color === 'warning' && {
      backgroundColor: 'var(--warningLight)',
    }),
    ...(radius && {
      borderRadius: 30,
    }),
    ':before': {
      ...(color === 'success' && {
        backgroundColor: 'var(--success)',
      }),
      ...(color === 'info' && {
        backgroundColor: 'var(--blue)',
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--danger)',
      }),
      ...(color === 'warning' && {
        backgroundColor: 'var(--warning)',
      }),
      ...(radius && {
        borderRadius: '50%',
      }),
      ...(size === 'large' && {
        width: 22,
        height: 22,
        left: 4,
        bottom: 4,
      }),
      ...(size === 'small' && {
        width: 16,
        height: 16,
        left: 1,
        bottom: 1,
      }),
    },
  })
);

const Toggle = forwardRef(
  ({ defaultChecked, size, radius, color, ...props }, ref) => {
    return (
      <ToggleWrapper size={size} ref={ref}>
        <InputRoot
          type="checkbox"
          defaultChecked={defaultChecked}
          size={size}
          {...props}
        />
        <SpanRoot color={color} radius={radius} size={size}></SpanRoot>
      </ToggleWrapper>
    );
  }
);

Toggle.propTypes = {
  color: PropTypes.oneOf(['default', 'success', 'info', 'error', 'warning']),
  radius: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  defaultChecked: PropTypes.bool,
};
Toggle.defaultProps = {
  color: 'default',
  radius: false,
  size: 'medium',
  defaultChecked: false,
};
export default Toggle;
