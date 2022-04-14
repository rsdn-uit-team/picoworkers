import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
export default function Header() {
  const showMenu = () => {
    document.getElementsByClassName('header__menu')[0].style.right = '0';
  };
  const hideMenu = () => {
    document.getElementsByClassName('header__menu')[0].style.right = '-300px';
  };
  return (
    <header>
      <NavLink className="header__logo" to="/">
        <img
          src="https://picoworkers.com/assets/images/logo.svg"
          alt="picoworkers"
        />
      </NavLink>
      <ul className="header__menu">
        <button
          className="button__hide"
          onClick={() => {
            hideMenu();
          }}
        >
          <i className="far fa-times"></i>
        </button>
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
        <NavLink to="/login" className="button__login button__item">
          Log In
        </NavLink>
        <NavLink to="#" className="button__signup button__item">
          Sign Up
        </NavLink>
        <button
          className="button__show"
          onClick={() => {
            showMenu();
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
