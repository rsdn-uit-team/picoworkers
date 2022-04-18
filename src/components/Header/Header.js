import Button from 'components/Button/Button';
import IconButton from 'components/IconButton/IconButton';
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Link from 'components/Link/Link';
const HeaderField = styled.div`
  display: flex;
  max-width: 1046px;
  padding: 0 20px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 103px;
  @media (max-width: 992px) {
    height: 73px;
  }
`;
const MenuField = styled.ul`
  display: flex;
  margin: 0;
  font-weight: 500;
  .icon__hide {
    display: none;
  }
  li {
    position: relative;
    margin: 0;
    & + li {
      margin-left: 40px;
    }
  }
  @media (max-width: 992px) {
    z-index: 10000;
    box-sizing: border-box;
    flex-direction: column;
    font-weight: 300;
    position: fixed;
    width: 300px;
    height: 100%;
    top: 0;
    padding: 0;
    right: -300px;
    background-color: var(--white);
    transition: 0.25s all ease-in-out;
    -webkit-transition: 0.25s all ease-in-out;
    box-shadow: 0 8px 20px 0 var(--shadow);
    .icon__hide {
      display: inline;
      margin-left: auto;
    }
    li {
      margin: 8px 20px;
      margin-right: auto;
      a {
        font-weight: 400;
      }
      & + li {
        margin-left: 20px;
      }
    }
  }
`;
const ContainerField = styled.div`
  display: flex;
  align-items: center;
  .button__login {
    margin-right: 12px;
    font-weight: 400;
  }
  #button__show {
    display: none;
    margin-left: 20px;
  }
  @media (max-width: 992px) {
    .button__login {
      padding: 6px 8px !important;
      margin-right: 10px;
    }
    .button__signup {
      padding: 6px 8px !important;
    }
    #button__show {
      display: inline;
    }
  }
  @media (max-width: 400px) {
    .button__login {
      margin-right: 0;
    }
    #button__show {
      margin-left: 5px;
    }
  }
`;
export default function Header() {
  const menu = useRef(null);
  const showMenu = () => {
    menu.current.style.right = '0';
  };
  const hideMenu = () => {
    menu.current.style.right = '-300px';
  };
  return (
    <header>
      <HeaderField className="header">
        <Link to="/">
          <img src="./assets/images/logo.svg" alt="picoworkers" />
        </Link>
        <MenuField className="header__menu" ref={menu}>
          <IconButton
            className="icon__hide"
            aria_label="fal fa-times"
            size="medium"
            onClick={() => {
              hideMenu();
            }}
          />
          <li>
            <Link className="menu-item" to="#">
              About
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="#">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="#">
              Freelance {'&'} Earn
            </Link>
          </li>
        </MenuField>
        <ContainerField className="header__button">
          <Button
            variant="button__login btn text text-primary"
            to="/login"
            color="success"
          >
            Log In
          </Button>
          <Button to="#" variant="button__signup btn contained">
            Sign Up
          </Button>
          <IconButton
            id="button__show"
            aria_label="fal fa-bars"
            border="border"
            size="small"
            onClick={() => {
              showMenu();
            }}
          />
        </ContainerField>
      </HeaderField>
    </header>
  );
}
