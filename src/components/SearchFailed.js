import { searchFailedActions } from "../store/searchFailed";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./SearchFailed.css";

const SearchFailed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToDrinkOfDay = () => {
    dispatch(searchFailedActions.clearSearchFailed());
    navigate("/");
  };

  return (
    <div className="no-results-container">
      <h2>Sorry, that drink is not on our list</h2>
      <button onClick={backToDrinkOfDay} className="btn-style">
        Back to drink of the day{" "}
      </button>
    </div>
  );
};

export default SearchFailed;
