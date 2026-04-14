import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  color: #94a3b8;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #fbbf24;
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #fbbf24;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

function NavItem({ url, str }) {
  return <StyledLink to={url}>{str}</StyledLink>;
}

export default NavItem;
