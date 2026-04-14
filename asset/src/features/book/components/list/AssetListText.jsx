import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0;
  position: relative;
  text-shadow: 0 0 15px rgba(251, 191, 36, 0.3);

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #fbbf24;
    margin-top: 10px;
    border-radius: 2px;
  }
`;

const SubTitle = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  margin-top: 10px;
  letter-spacing: 0.05rem;
`;

function AssetListText() {
  return (
    <TitleContainer>
      <MainTitle>System Inventory</MainTitle>
      <SubTitle>자산 관리 기록.</SubTitle>
    </TitleContainer>
  );
}

export default AssetListText;
