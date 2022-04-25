import { forwardRef } from 'react';
import styled from '@emotion/styled';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';

const DrawerWrapper = styled.div(
  {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
  },
  ({ backdrop }) => ({
    ...(backdrop === 'default' && {
      backgroundColor: 'var(--backdropDefault)',
    }),
    ...(backdrop === 'transparent' && {
      backgroundColor: 'transparent',
    }),
  })
);
const DrawerRoot = styled.div(
  {
    zIndex: 10000,
    position: 'fixed',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    backgroundColor: 'var(--white)',
    boxShadow: '0 8px 20px 0 var(--shadow)',
    transition: '0.5s all ease-in-out',
  },
  ({ anchor, open }) => ({
    ...(anchor === 'left' && {
      height: '100%',
      minWidth: 'auto',
      top: 0,
      left: '-1000px',
      ...(open && {
        left: 0,
      }),
    }),
    ...(anchor === 'right' && {
      height: '100vh',
      width: 'auto',
      top: 0,
      right: -1000,
      ...(open && {
        right: 0,
      }),
    }),
    ...(anchor === 'top' && {
      height: 'auto',
      width: '100vw',
      left: 0,
      top: -1000,
      ...(open && {
        top: 0,
      }),
    }),
    ...(anchor === 'bottom' && {
      height: 'auto',
      width: '100vw',
      left: 0,
      bottom: -1000,
      ...(open && {
        bottom: 0,
      }),
    }),
  })
);
const ButtonClose = styled.div({
  marginLeft: 'auto',
});
const Drawer = forwardRef(
  ({ anchor, open, onClose, children, backdrop, ...props }, ref) => {
    return (
      <div {...props}>
        {open && (
          <DrawerWrapper
            backdrop={backdrop}
            ref={ref}
            onClick={onClose}
          ></DrawerWrapper>
        )}
        <DrawerRoot className="drawer-root" anchor={anchor} open={open}>
          <ButtonClose>
            <IconButton onClick={onClose} size="large">
              <Icon.X />
            </IconButton>
          </ButtonClose>
          <div>{children}</div>
        </DrawerRoot>
      </div>
    );
  }
);
Drawer.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  open: PropTypes.bool,
  backdrop: PropTypes.oneOf(['default', 'transparent']),
};
Drawer.defaultProps = {
  anchor: 'right',
  open: false,
  backdrop: 'default',
};
export default Drawer;
