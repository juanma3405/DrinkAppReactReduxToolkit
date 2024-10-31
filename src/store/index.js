import { configureStore } from "@reduxjs/toolkit";
import randomDrinkReducer from "./randomdrink";
import searchReducer from "./search";
import chosenDrinkReducer from "./chosenDrink";
import searchFailedReducer from "./searchFailed";
import errorReducer from "./error";

const store = configureStore({
  reducer: {
    randomDrink: randomDrinkReducer,
    search: searchReducer,
    chosenDrink: chosenDrinkReducer,
    searchFailed: searchFailedReducer,
    error: errorReducer,
  },
});

store.subscribe(() => {
  const dayDrink = store.getState().randomDrink.drink;
  const drinks = store.getState().search.drinks;
  const chosenDrink = store.getState().chosenDrink.drink;
  sessionStorage.setItem("dayDrink", JSON.stringify(dayDrink));
  sessionStorage.setItem("drinks", JSON.stringify(drinks));
  sessionStorage.setItem("chosenDrink", JSON.stringify(chosenDrink));
});

export default store;
