import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const lastId = 0;
const shopsSlice = createSlice({
  name: "shops",
  initialState: [
    {
      id: 0,
      name: "chemist",
      area: "thane",
      category: "chemist",
      openingDate: "2022-11-08",
      closingDate: "2022-12-25",
    },
    {
      id: 1,
      name: "stationary",
      area: "mumbai suburban",
      category: "stationary",
      openingDate: "2022-11-08",
      closingDate: "2022-12-20",
    },
    {
      id: 2,
      name: "butcher shop",
      area: "pune",
      category: "butcher",
      openingDate: "2022-11-08",
      closingDate: "2022-12-01",
    },
    {
      id: 3,
      name: "butcher 2 shop",
      area: "thane",
      category: "butcher",
      openingDate: "2022-11-08",
      closingDate: "2022-11-20",
    },
  ],

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

export const filterShops = ({ area, category, status }) =>
  createSelector(
    (state) =>
      state.filter((shop) => {
        if (area !== "all") return shop.area === area;
        return shop;
      }),
    (state) =>
      state.filter((shop) => {
        if (status !== "all") {
          if (status === "open") {
            return new Date(shop.closingDate).getTime() >= new Date().getTime();
          } else {
            return new Date(shop.closingDate).getTime() < new Date().getTime();
          }
        }
        return shop;
      }),
    (state) =>
      state.filter((shop) => {
        if (category !== "all") return shop.category === category;
        return shop;
      })
  );
