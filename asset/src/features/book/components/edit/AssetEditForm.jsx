import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAsset from '../../hooks/useAsset';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
`;

const InputGroup = styled.div`
  margin-bottom: 25px;
  label {
    display: block;
    font-size: 0.8rem;
    color: #94a3b8;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 15px;
  color: #f1f5f9;
  font-size: 1.1rem;
  &:focus {
    outline: none;
    border-color: #fbbf24;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #fbbf24;
  color: #1e293b;
  border: none;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: #f59e0b;
  }
`;

function AssetEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vo, fetchAssetById, update } = useAsset();

  const [formData, setFormData] = useState({
    id: id,
    title: '',
    price: '',
  });

  useEffect(() => {
    fetchAssetById(id);
  }, [id, fetchAssetById]);

  useEffect(() => {
    if (vo) {
      setFormData({
        id: vo.id,
        title: vo.assetName || vo.title,
        price: vo.amount || vo.price,
      });
    }
  }, [vo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(formData);
      alert('데이터가 성공적으로 업데이트되었습니다.');
      navigate(`/asset/detail/${id}`);
    } catch (error) {
      alert('업데이트 중 오류가 발생했습니다.');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Asset Description</label>
          <StyledInput
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <label>Valuation (KRW)</label>
          <StyledInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <SubmitButton type="submit">Commit Changes</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default AssetEditForm;
