import { createSlice } from "@reduxjs/toolkit";

const randomDrinkSlice = createSlice({
  name: "randomDrink",
  initialState: {
    drink: JSON.parse(sessionStorage.getItem("dayDrink")) || null,
  },
  reducers: {
    setRandomDrink(state, action) {
      state.drink = action.payload.drink;
    },
  },
});

export const randomDrinkActions = randomDrinkSlice.actions;
export default randomDrinkSlice.reducer;
