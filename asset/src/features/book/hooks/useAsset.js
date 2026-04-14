import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  findAll,
  findById,
  deleteById as apiDeleteById,
  updateAssetById as apiUpdateAsset,
} from '../api/AssetApi';
import { setError, setLoading, setVo, setVoList } from '../store/assetSlice';

export default function useAsset() {
  const dispatch = useDispatch();
  const { error, loading, voList, vo } = useSelector((state) => state.asset);

  const fetchAssetList = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const resp = await findAll();
      dispatch(setVoList(resp.data));
    } catch (e) {
      dispatch(setError(e.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const fetchAssetById = useCallback(
    async (id) => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const resp = await findById(id);
        dispatch(setVo(resp.data));
      } catch (e) {
        dispatch(setError(e.message));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const deleteById = useCallback(
    async (id) => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await apiDeleteById(id);
      } catch (e) {
        dispatch(setError(e.message));
        throw e;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  const update = useCallback(
    async (assetVo) => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await apiUpdateAsset(assetVo);
      } catch (e) {
        dispatch(setError(e.message));
        throw e;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return {
    voList,
    vo,
    loading,
    error,
    fetchAssetList,
    fetchAssetById,
    deleteById,
    update,
  };
}
