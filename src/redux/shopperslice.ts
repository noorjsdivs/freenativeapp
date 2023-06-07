import {createSlice} from '@reduxjs/toolkit';
import {StoreProduct, UserInfo} from '../../type';

interface ShopperState {
  productData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | UserInfo;
}

const initialState: ShopperState = {
  productData: [],
  allProducts: [],
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: 'shopper',
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addToCart: (state, action) => {
      const existedItem = state.productData.find(
        item => item._id === action.payload._id,
      );
      if (existedItem) {
        existedItem.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    resetCart: state => {
      state.productData = [];
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        item => item._id !== action.payload,
      );
    },
    increaseQty: (state, action) => {
      const existedItem = state.productData.find(
        item => item._id === action.payload._id,
      );
      existedItem && existedItem.quantity++;
    },
    decreaseQty: (state, action) => {
      const existedItem = state.productData.find(
        item => item._id === action.payload._id,
      );
      existedItem?.quantity === 1
        ? (existedItem.quantity = 1)
        : existedItem!.quantity--;
    },
  },
});

export const {
  allProducts,
  addToCart,
  resetCart,
  deleteItem,
  increaseQty,
  decreaseQty,
} = shopperSlice.actions;
export default shopperSlice.reducer;
