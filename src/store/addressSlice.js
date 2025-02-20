import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'addresses',
  initialState: {
    items: [],
    defaultAddress: null,
  },
  reducers: {
    addAddress: (state, action) => {
      state.items.push(action.payload);
      if (state.items.length === 1) {
        state.defaultAddress = action.payload;
      }
    },
    updateAddress: (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          if (state.defaultAddress?.id === action.payload.id) {
            state.defaultAddress = action.payload;
          }
        }
      },
      deleteAddress: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        if (state.defaultAddress?.id === action.payload) {
          state.defaultAddress = state.items[0] || null;
        }
      },
      setDefaultAddress: (state, action) => {
        state.defaultAddress = action.payload;
      },
    },
  });
  
  export const { addAddress, updateAddress, deleteAddress, setDefaultAddress } =
    addressSlice.actions;
  export default addressSlice.reducer;