import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './app/layouts/DefaultLayout';
import AssetInsertPage from './features/book/pages/AssetInsertPage';
import AssetListPage from './features/book/pages/AssetListPage';
import AssetDetailPage from './features/book/pages/AssetDetailPage';
import AssetEditPage from './features/book/pages/AssetEditPage';

function App() {
  return (
    <>
           {' '}
      <Routes>
               {' '}
        <Route path="/*" element={<DefaultLayout />}>
                    <Route index element={<h1>HOME PAGE ~~~</h1>} />         {' '}
          <Route path="asset/*">
                        <Route path="insert" element={<AssetInsertPage />} />
                        <Route path="list" element={<AssetListPage />} />
                       {' '}
            <Route path="detail/:id" element={<AssetDetailPage />} />
                        <Route path="edit/:id" element={<AssetEditPage />} />   
                 {' '}
          </Route>
                    <Route path="*" element={<h1>ERROR PAGE ~~~</h1>} />     
           {' '}
        </Route>
             {' '}
      </Routes>
         {' '}
    </>
  );
}

export default App;
