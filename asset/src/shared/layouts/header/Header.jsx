import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 0 40px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(251, 191, 36, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0;
  cursor: pointer;
  letter-spacing: -0.05rem;

  span {
    color: #fbbf24;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/asset/list')}>
        Asset <span>Tracker</span>
      </Logo>
    </HeaderContainer>
  );
}

export default Header;
