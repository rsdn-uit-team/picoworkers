import React from 'react';
import styled from '@emotion/styled';
import Link from 'components/Link/Link';
const FooterField = styled.footer`
  background-color: var(--backgroundFooter);
  margin-top: auto;
`;
const ContainerField = styled.div`
  max-width: 1086px;
  padding: 80px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: var(--dark);
  }
  ul {
    list-style: none;
  }
  .footer__text {
    margin: 0;
    margin-top: 16px;
    color: var(--gray);
    font-size: 12px;
  }
  @media (max-width: 992px) {
    padding: 70px 20px;
    text-align: center;
  }
`;
const RowField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.header {
    padding-bottom: 50px;
  }
  &.content {
    color: var(--gray);
    p {
      margin: 0;
    }
  }
  @media (max-width: 992px) {
    display: block;
    &.header {
      padding-bottom: 40px;
    }
    &.content {
      padding-bottom: 15px;
    }
  }
`;
const MenuField = styled.ul`
  display: flex;
  li {
    position: relative;
    box-sizing: border-box;
    & + li {
      margin-left: 40px;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-top: 50px;
    li {
      margin: 10px;
      & + li {
        margin-left: 10px;
      }
    }
  }
`;
const SocialField = styled.ul`
  display: flex;
  margin: 0;
  li {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 992px) {
    padding-top: 15px;
    justify-content: center;
  }
`;
export default function Footer() {
  return (
    <FooterField>
      <ContainerField>
        <RowField className="header">
          <Link to="/">
            <img src="./assets/images/logo.svg" alt="picoworkers" />
          </Link>
          <MenuField>
            <li>
              <Link className="menu-item" to="#">
                About
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="#">
                Wall of Fame
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
            <li>
              <Link className="menu-item" to="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="#">
                Privacy Policy
              </Link>
            </li>
          </MenuField>
        </RowField>
        <RowField className="content">
          <p>© 2022 Picoworkers.com. All Rights Reserved</p>
          <SocialField>
            <li>
              <Link className="icon-item" to="#">
                <i className="fas fa-envelope"></i>
              </Link>
            </li>
            <li>
              <Link className="icon-item" to="#">
                <i className="fab fa-facebook-square"></i>
              </Link>
            </li>
            <li>
              <Link className="icon-item" to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link className="icon-item" to="#">
                <i className="fab fa-reddit-alien"></i>
              </Link>
            </li>
          </SocialField>
        </RowField>
        <p className="footer__text">
          47 U.S. Code § 230 Disclaimer: Picoworkers shall not be treated as the
          publisher or speaker of any information provided by job publishers.
        </p>
      </ContainerField>
    </FooterField>
  );
}
