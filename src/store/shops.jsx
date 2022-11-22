import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const lastId = 0;
const shopsSlice = createSlice({
  name: "shops",
  initialState: [],

  reducers: {
    shopsAdded: (shops, action) => {
      // lastId += 1
      shops.push(action.payload);
      //      shops.push({ ...action.payload, id: lastId });
    },

    shopsRemoved: (shops, action) => {
      console.log(action);
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
