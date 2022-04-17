import Button from 'components/Button';
import IconButton from 'components/IconButton';
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
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
      <div className="header">
        <NavLink className="header__logo" to="/">
          <img src="./assets/images/logo.svg" alt="picoworkers" />
        </NavLink>
        <ul className="header__menu" ref={menu}>
          <IconButton
            name="icon__hide"
            aria_label="fal fa-times"
            size="25px"
            onClick={() => {
              hideMenu();
            }}
          />
          <li className="menu__item">
            <NavLink to="#">About</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="#">Affiliate Program</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="#">Freelance {'&'} Earn</NavLink>
          </li>
        </ul>
        <div className="header__button">
          <Button
            variant="button__login btn text text-primary"
            href="/login"
            color="success"
          >
            Log In
          </Button>
          <Button href="#" variant="button__signup btn contained">
            Sign Up
          </Button>
          <IconButton
            name="button__show"
            aria_label="fal fa-bars"
            size="20px"
            onClick={() => {
              showMenu();
            }}
          />
        </div>
      </div>
    </header>
  );
}
