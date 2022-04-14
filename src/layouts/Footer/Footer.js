import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__row footer__row--1">
          <NavLink className="footer__logo" to="/">
            <img
              src="https://picoworkers.com/assets/images/logo.svg"
              alt="picoworkers"
            />
          </NavLink>
          <ul className="footer__option">
            <li className="option__item">
              <NavLink to="#">About</NavLink>
            </li>
            <li className="option__item">
              <NavLink to="#">Wall of Fame</NavLink>
            </li>
            <li className="option__item">
              <NavLink to="#">Affiliate Program</NavLink>
            </li>
            <li className="option__item">
              <NavLink to="#">Freelance & Earn</NavLink>
            </li>
            <li className="option__item">
              <NavLink to="#">Terms of Use</NavLink>
            </li>
            <li className="option__item">
              <NavLink to="#">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__row footer__row--2">
          <p>@ 2022 Picoworkers.com. All Rights Reserved</p>
          <ul className="footer__social">
            <li className="social__item">
              <NavLink to="#">
                <i className="fas fa-envelope"></i>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="#">
                <i className="fab fa-facebook-square"></i>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="#">
                <i className="fab fa-twitter"></i>
              </NavLink>
            </li>
            <li className="social__item">
              <NavLink to="#">
                <i className="fab fa-reddit-alien"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="footer__text">
          47 U.S. Code § 230 Disclaimer: Picoworkers shall not be treated as the
          publisher or speaker of any information provided by job publishers.
        </p>
      </div>
    </footer>
  );
}
