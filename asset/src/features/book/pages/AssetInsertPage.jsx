import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { save } from '../api/AssetApi';

const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  span {
    color: #fbbf24;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    color: #94a3b8;
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const StyledInput = styled.input`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  color: #f1f5f9;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: #fbbf24;
  color: #1e293b;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);
  }
`;

function AssetInsertPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await save(formData);
      alert('성공적으로 등록되었습니다.');
      navigate('/asset/list');
    } catch (err) {
      alert('시스템 오류: 등록에 실패했습니다.');
      console.error(err);
    }
  };

  return (
    <Container>
      <Title>
        Register <span>New Asset</span>
      </Title>
      <FormCard>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <label>ASSET DESCRIPTION</label>
            <StyledInput
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="소비 상품명"
              required
            />
          </InputGroup>
          <InputGroup>
            <label>VALUATION (KRW)</label>
            <StyledInput
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="가격"
              required
            />
          </InputGroup>
          <SubmitButton type="submit">Deploy Asset</SubmitButton>
        </StyledForm>
      </FormCard>
    </Container>
  );
}

export default AssetInsertPage;
