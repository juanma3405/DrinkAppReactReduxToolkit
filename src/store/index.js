import { configureStore } from "@reduxjs/toolkit";
import randomDrinkReducer from "./randomdrink";
import searchReducer from "./search";
import chosenDrinkReducer from "./chosenDrink";
import searchFailedReducer from "./searchFailed";

const store = configureStore({
  reducer: {
    randomDrink: randomDrinkReducer,
    search: searchReducer,
    chosenDrink: chosenDrinkReducer,
    searchFailed: searchFailedReducer,
  },
});

export default store;
