import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  voList: [],
  vo: {},
  loading: false,
  error: null,
};

const assetSlice = createSlice({
  name: 'asset', 
  initialState,
  reducers: {
    setVoList: (state, action) => {
      state.voList = action.payload;
    },
    setVo: (state, action) => {
      state.vo = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    reset: (state) => {
      state.voList = initialState.voList;
      state.vo = initialState.vo;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
  },
});

export const { setError, setLoading, setVo, setVoList, reset } =
  assetSlice.actions;
export default assetSlice.reducer;
