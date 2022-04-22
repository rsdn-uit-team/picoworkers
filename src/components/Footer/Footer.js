import styled from '@emotion/styled';
import Stack from 'components/Stack/Stack';
import * as Icon from 'react-feather';
import Link from 'components/Link/Link';
import IconButton from 'components/IconButton/IconButton';
import RedditIcon from '../Icons/RedditIcon/RedditIcon';

const BackgroundColor = styled.div({
  backgroundColor: 'var(--backgroundFooter)',
});
const WrapperRoot = styled.div({
  maxWidth: 1086,
  boxSizing: 'border-box',
  padding: '80px 20px',
  margin: 'auto',
  '@media screen and (max-width: 992px)': {
    padding: '70px 20px',
  },
});
const StackHeader = styled(Stack)({
  paddingBottom: 50,
});
const StackFooter = styled(Stack)({
  paddingTop: 16,
});
const MenuItemWrapper = styled.span({
  position: 'relative',
});
const MenuItem = styled.span({
  '::after': {
    content: '""',
    width: 0,
    position: 'absolute',
    height: 1,
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
const Text = styled.span(
  {
    color: 'var(--gray)',
    textAlign: 'center',
  },
  ({ size }) => ({
    fontSize: size,
  })
);
export default function Footer() {
  return (
    <BackgroundColor>
      <WrapperRoot>
        <StackHeader
          direction={{ md: 'row', xs: 'column' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={35}
        >
          <Link to="/">
            <img src="./assets/images/logo.svg" alt="logo" />
          </Link>
          <Stack
            direction={{ md: 'row', xs: 'column' }}
            spacing={{ md: 40, xs: 20 }}
            alignItems="center"
          >
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  About
                </Link>
              </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  Wall of Fame
                </Link>
              </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  Affiliate Program
                </Link>
              </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  Freelance & Earn
                </Link>
              </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  Terms of Use
                </Link>
              </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
              <MenuItem>
                <Link to="#" color="dark" underline="none">
                  Privacy Policy
                </Link>
              </MenuItem>
            </MenuItemWrapper>
          </Stack>
        </StackHeader>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 10 }}
        >
          <Text>© 2022 Picoworkers.com. All Rights Reserved.</Text>
          <Stack
            direction={{ md: 'row', xs: 'row' }}
            spacing={{ md: 10, xs: 10 }}
          >
            <a href="mailto:info@picoworkers.com">
              <IconButton>
                <Icon.Mail width={15} height={15} />
              </IconButton>
            </a>
            <a
              href="https://www.facebook.com/groups/picoworkersofficialgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Icon.Facebook width={15} height={15} />
              </IconButton>
            </a>
            <a
              href="https://twitter.com/Picoworkers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Icon.Twitter width={15} height={15} />
              </IconButton>
            </a>
            <a
              href="https://www.reddit.com/r/Picoworkers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <RedditIcon size={15} />
              </IconButton>
            </a>
          </Stack>
        </Stack>
        <StackFooter
          direction={{ md: 'row', xs: 'column' }}
          alignItems="center"
        >
          <Text size={12}>
            47 U.S. Code § 230 Disclaimer: Picoworkers shall not be treated as
            the publisher or speaker of any information provided by job
            publishers.
          </Text>
        </StackFooter>
      </WrapperRoot>
    </BackgroundColor>
  );
}
