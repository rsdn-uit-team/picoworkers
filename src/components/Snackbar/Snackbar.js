import styled from '@emotion/styled';
import Stack from 'components/Stack/Stack';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { X } from 'react-feather';

const SnackbarRoot = styled(Stack)(
  {
    position: 'fixed',
    zIndex: 11111,
    minWidth: 300,
    maxWidth: 500,
    padding: '10px 10px 10px 20px',
    borderRadius: 5,
    boxSizing: 'border-box',
    transition: '0.25s all ease-in-out',
  },
  ({ anchorOrigin, open, variant, color }) => ({
    ...(color === 'success' && {
      border: '1px solid var(--success)',
      color: 'var(--success)',
      backgroundColor: 'var(--white)',
      ...(variant === 'filled' && {
        border: '1px solid var(--success)',
        color: 'var(--white)',
        backgroundColor: 'var(--success)',
      }),
    }),
    ...(color === 'warning' && {
      border: '1px solid var(--warning)',
      color: 'var(--warning)',
      backgroundColor: 'var(--white)',
      ...(variant === 'filled' && {
        border: '1px solid var(--warning)',
        color: 'var(--white)',
        backgroundColor: 'var(--warning)',
      }),
    }),
    ...(color === 'error' && {
      border: '1px solid var(--danger)',
      color: 'var(--danger)',
      backgroundColor: 'var(--white)',
      ...(variant === 'filled' && {
        border: '1px solid var(--danger)',
        color: 'var(--white)',
        backgroundColor: 'var(--danger)',
      }),
    }),
    ...(color === 'info' && {
      border: '1px solid var(--blue)',
      color: 'var(--blue)',
      backgroundColor: 'var(--white)',
      ...(variant === 'filled' && {
        border: '1px solid var(--blue)',
        color: 'var(--white)',
        backgroundColor: 'var(--blue)',
      }),
    }),
    ...(anchorOrigin === 'top-center' && {
      top: -500,
      left: '50%',
      transform: 'translateX(-50%)',
      ...(open && {
        top: 20,
      }),
    }),
    ...(anchorOrigin === 'top-left' && {
      top: 20,
      left: -500,
      marginRight: 20,
      ...(open && {
        left: 20,
      }),
    }),
    ...(anchorOrigin === 'top-right' && {
      top: 20,
      right: -500,
      marginLeft: 20,
      ...(open && {
        right: 20,
      }),
    }),
    ...(anchorOrigin === 'bottom-center' && {
      bottom: -500,
      left: '50%',
      transform: 'translateX(-50%)',
      ...(open && {
        bottom: 20,
      }),
    }),
    ...(anchorOrigin === 'bottom-left' && {
      bottom: 20,
      left: -500,
      marginRight: 20,
      ...(open && {
        left: 20,
      }),
    }),
    ...(anchorOrigin === 'bottom-right' && {
      bottom: 20,
      right: -500,
      marginLeft: 20,
      ...(open && {
        right: 20,
      }),
    }),
  })
);
const IconWrapper = styled.div({
  width: 24,
  height: 24,
  paddingLeft: 10,
});
const IconClose = styled(X)({
  cursor: 'pointer',
});
const SpanRoot = styled.span({
  lineHeight: '20px',
});
const Snackbar = forwardRef(
  ({ variant, anchorOrigin, color, open, onClose, message, ...props }, ref) => {
    return (
      <SnackbarRoot
        variant={variant}
        color={color}
        anchorOrigin={anchorOrigin}
        open={open}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        {...props}
        ref={ref}
      >
        <SpanRoot>{message}</SpanRoot>
        <IconWrapper>
          <IconClose onClick={onClose} />
        </IconWrapper>
      </SnackbarRoot>
    );
  }
);
Snackbar.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'filled']),
  anchorOrigin: PropTypes.oneOf([
    'top-center',
    'top-left',
    'top-right',
    'bottom-center',
    'bottom-left',
    'bottom-right',
  ]),
  color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  message: PropTypes.string,
};
Snackbar.defaultProps = {
  variant: 'outlined',
  anchorOrigin: 'top-center',
  color: 'success',
};
export default Snackbar;
