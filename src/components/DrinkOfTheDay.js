import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import DrinkDetail from "./DrinkDetail";
import Error from "./Error";
import "./DrinkOfTheDay.css";

const DrinkOfTheDay = () => {
  const drinkOfTheDay = useSelector((state) => state.randomDrink.drink);
  const error = useSelector((state) => state.error.error);

  if (error) return <Error />;

  if (!drinkOfTheDay) return <div className="drink-container">Loading...</div>;

  return (
    <div>
      <div className="drink-container">
        <DrinkDetail drink={drinkOfTheDay} message={"Your drink of the day"} />
        <br />
        <SearchBar />
      </div>
    </div>
  );
};

export default DrinkOfTheDay;
