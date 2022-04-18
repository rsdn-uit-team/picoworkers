import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkRoot = styled(({ children, ...props }) => (
  <NavLink {...props}>{children}</NavLink>
))`
  margin-left: 5px;
  color: var(--success);
  &:hover {
    color: var(--linkHover);
  }
  &.menu-item {
    margin-left: 0;
    border-bottom: none;
    text-decoration: none;
    color: var(--dark);
    font-size: 14px;
    &::after {
      content: '';
      width: 0;
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 50%;
      transition: 0.15s all ease-in-out;
      -webkit-transition: 0.15s all ease-in-out;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      background-color: var(--primary);
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  &.icon-item {
    margin-left: 0;
    color: var(--gray);
    padding: 6px 10px;
    &:hover {
      color: var(--primary);
    }
  }
`;

export default function Link({ children, ...props }) {
  return <LinkRoot {...props}>{children}</LinkRoot>;
}
