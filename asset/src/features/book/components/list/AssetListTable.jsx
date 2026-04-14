import React from 'react';
import useAsset from '../../hooks/useAsset';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  color: #f1f5f9;

  th {
    padding: 12px 20px;
    text-align: left;
    color: #94a3b8;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  tbody tr {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: scale(1.01);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  td {
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:first-child {
      border-left: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px 0 0 12px;
      color: #fbbf24;
      font-weight: 600;
    }

    &:last-child {
      border-right: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 0 12px 12px 0;
      text-align: right;
      font-weight: 700;
    }
  }
`;

function AssetListTable() {
  const { voList } = useAsset();
  const navigate = useNavigate();

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>No.</th>
            <th>Asset Name</th>
            <th style={{ textAlign: 'right' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {voList &&
            voList.map((vo) => (
              <tr
                key={vo.id}
                onClick={() => navigate(`/asset/detail/${vo.id}`)}
              >
                <td>{vo.id}</td>
                <td>{vo.assetName || vo.title}</td>
                <td>{Number(vo.amount || vo.price).toLocaleString()} 원</td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default AssetListTable;
