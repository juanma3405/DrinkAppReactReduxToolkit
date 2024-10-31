import DrinkDetail from "./DrinkDetail";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/search";
import { useNavigate } from "react-router-dom";
import { chosenDrinkActions } from "../store/chosenDrink";

const ChosenDrink = () => {
  const selectedDrink = useSelector((state) => state.chosenDrink.drink);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToList = () => {
    dispatch(chosenDrinkActions.clearChosenDrink());
    navigate("/search");
  };

  const backToDrinkOfDay = () => {
    dispatch(chosenDrinkActions.clearChosenDrink());
    dispatch(searchActions.cleanSearch());
    navigate("/dayDrink");
  };

  if (!selectedDrink)
    return <div className="drink-container">Loading drink...</div>;

  return (
    <div>
      <div className="drink-container">
        <DrinkDetail drink={selectedDrink} message={"Your chosen drink"} />
        <br />
        <button className="btn-style" onClick={backToList}>
          Back to your search list{" "}
        </button>
        <button className="btn-style" onClick={backToDrinkOfDay}>
          Back to drink of the day
        </button>
      </div>
    </div>
  );
};

export default ChosenDrink;
