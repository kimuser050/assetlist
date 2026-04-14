import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  margin: 10px 20px;
  padding: 0 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

function Nav() {
  return (
    <StyledNav>
      <NavItem url="/asset/list" str="소비내역" />
      <NavItem url="/asset/insert" str="기록하기" />
    </StyledNav>
  );
}

export default Nav;
