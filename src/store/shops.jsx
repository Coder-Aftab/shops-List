import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
const lastId = 0;
const shopsSlice = createSlice({
  name: "shops",
  initialState: [
    {
      id: 0,
      name: "Sharma chemist",
      area: "thane",
      category: "chemist",
      openingDate: "2022-11-08",
      closingDate: "2022-12-25",
    },
    {
      id: 1,
      name: "Gupta stationary",
      area: "mumbai suburban",
      category: "stationary",
      openingDate: "2022-11-08",
      closingDate: "2022-12-20",
    },
    {
      id: 2,
      name: "Safal Groceries",
      area: "pune",
      category: "grocery",
      openingDate: "2022-11-08",
      closingDate: "2022-12-01",
    },
    {
      id: 3,
      name: "Rehman Bakery",
      area: "thane",
      category: "Bakery",
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

export const filterShops =
  ({ area, category, status }) =>
  (states) => {
    return states
      .filter((shop) => {
        if (category !== "all") return shop.category === category;
        return shop;
      })
      .filter((shop) => {
        if (area !== "all") return shop.area === area;
        return shop;
      })
      .filter((shop) => {
        if (status !== "all") {
          if (status === "open") {
            return new Date(shop.closingDate).getTime() >= new Date().getTime();
          } else {
            return new Date(shop.closingDate).getTime() < new Date().getTime();
          }
        }
        return shop;
      });
  };
