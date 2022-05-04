import styled from '@emotion/styled';
import Stack from 'components/Stack/Stack';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

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
    OAppearance: 'none',
    borderRadius: '50%',
    border: '1px solid var(--success)',
    ':checked': {
      background: 'url(./assets/images/radio-checked.svg) no-repeat center',
      backgroundColor: 'var(--success)',
    },
  },
  ({ labelPlacement, color, size }) => ({
    ...(labelPlacement === 'top' && { marginTop: 10 }),
    ...(labelPlacement === 'bottom' && { marginBottom: 10 }),
    ...(labelPlacement === 'start' && { marginLeft: 10 }),
    ...(labelPlacement === 'end' && { marginRight: 10 }),
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
});
const Radio = forwardRef(
  (
    { labelPlacement, color, size, label, checked, onChange, ...props },
    ref
  ) => {
    return (
      <RadioWrapper
        direction={
          labelPlacement === 'top'
            ? 'column-reverse'
            : labelPlacement === 'bottom'
            ? 'column'
            : labelPlacement === 'start'
            ? 'row-reverse'
            : 'row'
        }
        alignItems="center"
        ref={ref}
      >
        <InputRoot
          type="radio"
          labelPlacement={labelPlacement}
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <LabelRoot htmlFor={props.id}>{label}</LabelRoot>
      </RadioWrapper>
    );
  }
);
Radio.propTypes = {
  labelPlacement: PropTypes.oneOf(['top', 'bottom', 'start', 'end']),
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'success', 'error', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
Radio.defaultProps = {
  labelPlacement: 'end',
  label: 'label',
  color: 'success',
  size: 'medium',
};
export default Radio;
