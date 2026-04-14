import React from 'react';
import styled from 'styled-components';
import useAsset from './../../hooks/useAsset';

const DetailCard = styled.div`
  max-width: 600px;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }

  .label {
    font-size: 0.8rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .value {
    font-size: 1.2rem;
    color: #f1f5f9;
    font-weight: 500;
  }

  .highlight {
    color: #fbbf24;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
  }
`;

function AssetDetailContent() {
  const { vo } = useAsset();

  return (
    <DetailCard>
      <InfoGroup>
        <InfoItem>
          <span className="label">Asset Serial No.</span>
          <span className="value">#{vo.id}</span>
        </InfoItem>

        <InfoItem>
          <span className="label">Item Name</span>
          <span className="value highlight">{vo.title}</span>
        </InfoItem>

        <InfoItem>
          <span className="label">Unit Price / Value</span>
          <span className="value">₩ {vo.price?.toLocaleString()}</span>
        </InfoItem>

        <InfoItem>
          <span className="label">Entry Date</span>
          <span className="value">{vo.createdAt}</span>
        </InfoItem>

        <InfoItem>
          <span className="label">Last System Update</span>
          <span
            className="value"
            style={{ fontSize: '0.9rem', color: '#64748b' }}
          >
            {vo.modifiedAt || 'No modifications recorded'}
          </span>
        </InfoItem>
      </InfoGroup>
    </DetailCard>
  );
}

export default AssetDetailContent;
