import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const shopsSlice = createSlice({
  name: "shops",
  initialState: [],
  reducers: {
    shopsAdded: (shops, action) => {
      shops.push(action.payload);
    },

    shopsRemoved: (shops, action) => {
      return shops.filter((shop) => shop.id !== action.payload.id);
    },

    shopsUpdate: (shops, action) => {
      const indx = shops.findIndex((shop) => shop.id === action.payload.id);
      shops[indx] = action.payload;
    },
  },
});

export const { shopsAdded, shopsRemoved, shopsUpdate } = shopsSlice.actions;
export default shopsSlice.reducer;
