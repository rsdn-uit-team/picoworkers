import styled from '@emotion/styled';
import Stack from 'components/Stack/Stack';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import Drawer from 'components/Drawer/Drawer';
import IconButton from 'components/IconButton/IconButton';
import { useState } from 'react';

const WrapperRoot = styled.div({
  maxWidth: 1086,
  boxSizing: 'border-box',
  padding: '31x 20px',
  margin: 'auto',
});
const MenuItemWrapper = styled.span({
  position: 'relative',
});
const LinkItem = styled(Link)({
  fontWeight: 500,
});
const ButtonSignup = styled(Button)({
  fontWeight: 'bold',
  ':hover': {
    backgroundColor: 'var(--success)',
    border: '1px solid var(--success)',
  },
});
const MenuItem = styled.span({
  '::after': {
    content: '""',
    width: 0,
    position: 'absolute',
    height: 2,
    bottom: 0,
    left: '50%',
    transition: '0.15s all ease-in-out',
    WebkitTransition: '0.15s all ease-in-out',
    WebkitTransform: 'translateX(-50%)',
    MsTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--primary)',
  },
  ':hover': {
    '::after': {
      width: '100%',
    },
  },
});
const MenuRoot = styled(Stack)({
  '@media (max-width: 992px)': {
    display: 'none',
  },
});
const IconDrawer = styled(IconButton)({
  lineHeight: 0.7,
  display: 'none',
  '@media (max-width: 992px)': {
    display: 'inline',
  },
});
const DrawerRoot = styled(Drawer)({
  display: 'none',
  '@media (max-width: 992px)': {
    display: 'block',
  },
});
const DrawerChildren = styled(Stack)({
  marginLeft: 20,
  width: 280,
});
const Header = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <WrapperRoot>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Link to="/">
          <img src="./assets/images/logo.svg" alt="picoworkers" />
        </Link>
        <MenuRoot direction="row" spacing={40}>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                About
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                Affiliate Program
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                Freelance & Earn
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
        </MenuRoot>
        <Stack
          direction={{ md: 'row', xs: 'row' }}
          alignItems="center"
          spacing={{ md: 20, xs: 10 }}
        >
          <Button onClick={() => navigate('/login')}>Log In</Button>
          <ButtonSignup
            variant="contained"
            color="success"
            radius={4}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </ButtonSignup>
          <IconDrawer
            variant="outlined"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Icon.Menu width={18} height={18} viewBox="0 0 24 24" />
          </IconDrawer>
        </Stack>
      </Stack>
      <DrawerRoot
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        backdrop="transparent"
      >
        <DrawerChildren direction="column" spacing={20}>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                About
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                Affiliate Program
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem>
              <LinkItem to="/" underline="none" color="dark">
                Freelance & Earn
              </LinkItem>
            </MenuItem>
          </MenuItemWrapper>
        </DrawerChildren>
      </DrawerRoot>
    </WrapperRoot>
  );
};
export default Header;
