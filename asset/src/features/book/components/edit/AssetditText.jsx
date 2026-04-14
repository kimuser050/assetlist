import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
  padding: 40px 20px 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryTag = styled.span`
  font-size: 0.75rem;
  color: #fbbf24;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const MainTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #f8fafc;
  margin: 0;

  span {
    color: #fbbf24;
  }
`;

const Description = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
`;

function AssetEditText() {
  return (
    <HeaderSection>
      <CategoryTag>Editor Mode</CategoryTag>
      <MainTitle>
        Update <span>Asset</span>
      </MainTitle>
      <Description>자산 수정 페이지.</Description>
    </HeaderSection>
  );
}

export default AssetEditText;
