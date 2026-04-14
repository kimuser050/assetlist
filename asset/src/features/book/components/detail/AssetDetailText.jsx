import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderSection = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: all 0.2s ease;
  letter-spacing: 0.05rem;

  &:hover {
    color: #fbbf24;
    transform: translateX(-3px);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0;
  letter-spacing: -0.02rem;
  text-transform: uppercase;
`;

const Divider = styled.div`
  width: 40px;
  height: 3px;
  background: #fbbf24;
  margin-top: 15px;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.4);
`;

function AssetDetailText() {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <BackButton onClick={() => navigate(-1)}>
        ← Back to Inventory List
      </BackButton>
      <TitleWrapper>
        <MainTitle>Asset Specification</MainTitle>
        <Divider />
      </TitleWrapper>
    </HeaderSection>
  );
}

export default AssetDetailText;
