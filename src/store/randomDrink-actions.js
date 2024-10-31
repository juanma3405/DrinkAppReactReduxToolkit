import { randomDrinkActions } from "./randomdrink";
import { errorActions } from "./error";
import ApiDrinkService from "../services/ApiDrinkService.service";
import responseToDrink from "../utils/responseToDrink";

export const fetchRandomDrink = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        dispatch(errorActions.setError(false));
        const response = await ApiDrinkService.getRandomCocktail();
        const newDrink = responseToDrink(response);
        dispatch(randomDrinkActions.setRandomDrink({ drink: newDrink }));
        return newDrink;
      } catch (error) {
        dispatch(errorActions.setError(true));
        console.error("Error fetching the random drink:", error);
      }
    };
    fetchData();
  };
};
