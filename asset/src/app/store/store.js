import { configureStore } from '@reduxjs/toolkit';
import assetReducer from '../../features/book/store/assetSlice';
const store = configureStore({
  reducer: {
    asset: assetReducer,
  },
});

export default store;
