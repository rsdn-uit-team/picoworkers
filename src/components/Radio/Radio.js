import styled from '@emotion/styled';
import Stack from 'components/Stack/Stack';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Check } from 'react-feather';

const RadioWrapper = styled(Stack)({
  display: 'inline-flex',
  position: 'relative',
});
const InputRoot = styled.input(
  {
    margin: 0,
    width: 20,
    height: 20,
    cursor: 'pointer',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    boxSizing: 'border-box',
    OAppearance: 'none',
    borderRadius: '50%',
    border: '1px solid var(--success)',
    marginRight: 10,
    ':checked': {
      backgroundColor: 'var(--success)',
    },
  },
  ({ color, size }) => ({
    ...(color === 'primary' && {
      border: '1px solid var(--primary)',
      ':checked': {
        backgroundColor: 'var(--primary)',
      },
    }),
    ...(color === 'error' && {
      border: '1px solid var(--danger)',
      ':checked': {
        backgroundColor: 'var(--danger)',
      },
    }),
    ...(color === 'info' && {
      border: '1px solid var(--blue)',
      ':checked': {
        backgroundColor: 'var(--blue)',
      },
    }),
    ...(size === 'small' && {
      width: 16,
      height: 16,
    }),
    ...(size === 'large' && {
      width: 26,
      height: 26,
    }),
  })
);
const LabelRoot = styled.label({
  cursor: 'pointer',
  lineHeight: '16px',
});
const Checked = styled(({ size, ...props }) => <Check {...props} />)(
  {
    display: 'none',
    position: 'absolute',
    top: 10,
    left: 10,
    transform: 'translate(-50%, -50%)',
    color: 'var(--white)',
    width: 14,
    height: 14,
    'input:checked + &': {
      display: 'block',
    },
  },
  ({ size }) => ({
    ...(size === 'small' && { left: 8, top: 8, width: 10, height: 10 }),
    ...(size === 'large' && { left: 13, top: 13, width: 18, height: 18 }),
  })
);
const Radio = forwardRef(
  ({ color, size, label, checked, onChange, ...props }, ref) => {
    return (
      <RadioWrapper direction="row" alignItems="center" ref={ref}>
        <InputRoot
          type="radio"
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <Checked strokeWidth="4" size={size} />
        <LabelRoot htmlFor={props.id}>{label}</LabelRoot>
      </RadioWrapper>
    );
  }
);
Radio.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'success', 'error', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
Radio.defaultProps = {
  label: 'label',
  color: 'success',
  size: 'medium',
};
export default Radio;
