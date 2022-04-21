import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const WrapperRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
});
const LabelRoot = styled.label({
  marginLeft: 8,
  ':hover': {
    cursor: 'pointer',
  },
});
const CheckBoxRoot = styled.input(
  {
    cursor: 'pointer',
    boxSizing: 'content-box',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    OAppearance: 'none',
    border: '1px solid var(--borderCheckbox)',
    margin: 0,
    padding: 1,
    backgroundClip: 'content-box',
    width: 9,
    height: 9,
    ':checked': {
      backgroundColor: 'var(--borderCheckbox)',
      border: '1px solid var(--borderCheckbox)',
    },
  },
  ({ color, size, radius }) => ({
    borderRadius: radius || 0,
    ...(color === 'success' && {
      ':checked': {
        backgroundColor: 'var(--success)',
        border: '1px solid var(--success)',
      },
    }),
    ...(color === 'primary' && {
      ':checked': {
        backgroundColor: 'var(--primary)',
        border: '1px solid var(--primary)',
      },
    }),
    ...(color === 'error' && {
      ':checked': {
        backgroundColor: 'var(--danger)',
        border: '1px solid var(--danger)',
      },
    }),
    ...(size === 'medium' && {
      height: 12,
      width: 12,
      padding: 2,
    }),
    ...(size === 'large' && {
      height: 16,
      width: 16,
      padding: 2,
    }),
  })
);
const CheckBox = forwardRef(({ color, size, radius, label, ...props }, ref) => (
  <WrapperRoot>
    <CheckBoxRoot
      type="checkbox"
      color={color}
      size={size}
      radius={radius}
      {...props}
      ref={ref}
    />
    <LabelRoot htmlFor={props.id}>{label}</LabelRoot>
  </WrapperRoot>
));
CheckBox.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radius: PropTypes.number,
};
CheckBox.defaultProps = {
  color: 'default',
  size: 'small',
};
export default CheckBox;
