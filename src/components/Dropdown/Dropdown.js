import styled from '@emotion/styled';
import * as Icon from 'react-feather';
import IconButton from 'components/IconButton/IconButton';
import React, { forwardRef, useRef } from 'react';
import Stack from 'components/Stack/Stack';

const DropdownRoot = styled.div({
  display: 'none',
  '@media (max-width: 992px)': {
    display: 'block',
    zIndex: 10000,
    boxSizing: 'border-box',
    flexDirection: 'column',
    position: 'fixed',
    width: 300,
    height: '100%',
    top: 0,
    paddingLeft: 20,
    right: -300,
    backgroundColor: 'var(--white)',
    transition: '0.25s all ease-in-out',
    WebkitTransition: '0.25s all ease-in-out',
    boxShadow: '0 8px 20px 0 var(--shadow)',
  },
});
const ButtonClose = styled.div({
  marginLeft: 'auto',
});
const Dropdown = forwardRef(({ children, ...props }, ref) => {
  const menu = useRef(null);
  return (
    <>
      <IconButton
        variant="outlined"
        size="small"
        onClick={() => (menu.current.style.right = '0')}
        {...props}
        ref={ref}
      >
        <Icon.Menu />
      </IconButton>
      <DropdownRoot ref={menu}>
        <Stack>
          <ButtonClose>
            <IconButton
              size="large"
              onClick={() => (menu.current.style.right = '-300px')}
            >
              <Icon.X />
            </IconButton>
          </ButtonClose>
          {children}
        </Stack>
      </DropdownRoot>
    </>
  );
});
export default Dropdown;
