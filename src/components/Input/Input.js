import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const WrapperRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
const LabelRoot = styled.label({
  color: 'var(--labelDefault)',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.1716666667,
  marginBottom: 10,
});
const Error = styled.span({
  color: 'var(--danger)',
  fontSize: 14,
});
const InputRoot = styled.input(
  {
    padding: '10px 11px 12px',
    fontSize: 14,
    border: '1px solid transparent',
    outline: 0,
    fontFamily: 'inherit',
    backgroundColor: 'var(--inputDefault);',
  },
  ({ variant, color, focused, radius }) => ({
    borderRadius: radius || 0,
    ...(variant === 'default' && {
      ...(focused && {
        ':focus': {
          borderBottom: '1px solid var(--primary)',
        },
      }),
      ...(color === 'success' && {
        color: 'var(--success)',
        ...(focused && {
          ':focus': {
            borderBottom: '1px solid var(--success)',
          },
        }),
      }),
      ...(color === 'primary' && {
        color: 'var(--primary)',
        ...(focused && {
          ':focus': {
            borderBottom: '1px solid var(--primary)',
          },
        }),
      }),
      ...(color === 'error' && {
        color: 'var(--danger)',
        ...(focused && {
          ':focus': {
            borderBottom: '1px solid var(--danger)',
          },
        }),
      }),
    }),
    ...(variant === 'outlined' && {
      backgroundColor: 'var(--white);',
      border: '1px solid var(--inputDefault)',
      color: 'var(--default)',
      ...(focused && {
        ':focus': {
          border: '1px solid var(--black)',
        },
      }),
      ...(color === 'success' && {
        backgroundColor: 'var(--white);',
        border: '1px solid var(--success)',
        color: 'var(--success)',
        ...(focused && {
          ':focus': {
            border: '1px solid var(--primaryHover)',
          },
        }),
      }),
      ...(color === 'primary' && {
        backgroundColor: 'var(--white);',
        border: '1px solid var(--primary)',
        color: 'var(--primary)',
        ...(focused && {
          ':focus': {
            border: '1px solid var(--primaryHover)',
          },
        }),
      }),
      ...(color === 'error' && {
        backgroundColor: 'var(--white);',
        border: '1px solid var(--danger)',
        color: 'var(--danger)',
        ...(focused && {
          ':focus': {
            border: '1px solid var(--red)',
          },
        }),
      }),
    }),
  })
);
const Input = forwardRef(
  (
    {
      label,
      variant,
      color,
      radius,
      error,
      focused,
      touched,
      placeholder,
      ...props
    },
    ref
  ) => (
    <WrapperRoot>
      <LabelRoot htmlFor={props.id}>{label}</LabelRoot>
      <InputRoot
        variant={variant}
        placeholder={placeholder}
        color={color}
        radius={radius}
        focused={focused}
        {...props}
        ref={ref}
      />
      {error && touched && <Error>{error}</Error>}
    </WrapperRoot>
  )
);
Input.propTypes = {
  variant: PropTypes.oneOf(['default', 'outlined']),
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  radius: PropTypes.number,
  focused: PropTypes.bool,
};
Input.defaultProps = {
  variant: 'default',
  color: 'default',
  border: 'none',
  focused: false,
};
export default Input;
