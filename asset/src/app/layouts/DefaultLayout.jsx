import React from 'react';
import Header from '../../shared/layouts/header/Header';
import Nav from '../../shared/layouts/nav/Nav';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 50px 1fr 60px;
  grid-template-columns: 1fr;
  background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
  color: #f1f5f9;
  overflow: hidden;

  & > header {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 10;
  }

  & > nav {
    background: rgba(15, 23, 42, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  & > main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 2rem;

    /* 스크롤바 디자인 */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
  }

  & > footer {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.8rem;
    color: #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* 💡 핵심: 콘텐츠 중앙 정렬을 위한 컨테이너 */
const MainContainer = styled.div`
  max-width: 1100px; /* 서재 느낌이 나도록 적당한 너비 제한 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
  width: 100%;
`;

function DefaultLayout() {
  return (
    <Wrapper>
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <main>
        {/* 모든 페이지(Outlet)가 이 컨테이너 안에서 중앙에 배치됨 */}
        <MainContainer>
          <Outlet />
        </MainContainer>
      </main>
    </Wrapper>
  );
}

export default DefaultLayout;
