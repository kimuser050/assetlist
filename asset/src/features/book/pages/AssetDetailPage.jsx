import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAsset from '../hooks/useAsset';
import { deleteById } from '../api/AssetApi';
import styled from 'styled-components';
import AssetDetailText from '../components/detail/AssetDetailText';
import AssetDetailContent from '../components/detail/AssetDetailContent';

const ActionGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  padding: 0 20px;
`;

const BaseButton = styled.button`
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const EditButton = styled(BaseButton)`
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;

  &:hover {
    background: #fbbf24;
    color: #1e293b;
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.4);
  }
`;

const DeleteButton = styled(BaseButton)`
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;

  &:hover {
    background: #f87171;
    color: #ffffff;
    box-shadow: 0 0 15px rgba(248, 113, 113, 0.4);
  }
`;

function AssetDetailPage() {
  const { id } = useParams();
  const { loading, error, fetchAssetById } = useAsset();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchAssetById(id);
    }
  }, [id, fetchAssetById]);

  if (loading)
    return (
      <h1 style={{ color: '#fbbf24', padding: '20px' }}>
        Analyzing Portfolio...
      </h1>
    );

  if (error)
    return (
      <h1 style={{ color: '#f87171', padding: '20px' }}>Data Fetch Error!</h1>
    );

  return (
    <>
      <AssetDetailText />
      <AssetDetailContent />
      <ActionGroup>
        <EditButton onClick={() => navigate(`/asset/edit/${id}`)}>
          Edit Asset
        </EditButton>
        <DeleteButton
          onClick={async () => {
            if (
              window.confirm(
                '정말 이 자산 기록을 포트폴리오에서 삭제하시겠습니까?'
              )
            ) {
              try {
                await deleteById(id);
                alert('자산 기록이 삭제되었습니다.');
                navigate(`/asset/list`);
              } catch (e) {
                alert('삭제 중 오류가 발생했습니다.');
              }
            }
          }}
        >
          Remove Asset
        </DeleteButton>
      </ActionGroup>
    </>
  );
}

export default AssetDetailPage;
