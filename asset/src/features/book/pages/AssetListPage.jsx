import React, { useEffect } from 'react';
import useAsset from './../hooks/useAsset';
import AssetListText from '../components/list/AssetListText';
import AssetListTable from '../components/list/AssetListTable';

function AssetListPage() {
  const { loading, error, voList, fetchAssetList } = useAsset();

  useEffect(() => {
    fetchAssetList();
  }, []);

  if (error)
    return (
      <h1 style={{ color: '#f87171', padding: '20px' }}>
        Error: 자산 목록을 불러오지 못했습니다.
      </h1>
    );

  if (loading)
    return (
      <h1 style={{ color: '#fbbf24', padding: '20px' }}>
        Analyzing Portfolio...
      </h1>
    );

  return (
    <>
      <AssetListText />
      <AssetListTable voList={voList} />
    </>
  );
}

export default AssetListPage;
