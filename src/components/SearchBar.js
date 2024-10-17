import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchImage from "../assets/search.svg";
import ApiDrinkService from "../services/ApiDrinkService.service";
import { searchActions } from "../store/search";
import { searchFailedActions } from "../store/searchFailed";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiDrinkService.getCocktail(query);
      const searchDrinks = response.drinks || [];
      if (searchDrinks.length === 0) {
        dispatch(searchFailedActions.setSearchFailed());
        navigate("/searchFailed");
        return;
      }
      console.log(searchDrinks);
      const searchResults = searchDrinks.map((drink) => ({
        idDrink: drink.idDrink,
        name: drink.strDrink,
        urlImage: drink.strDrinkThumb,
      }));
      dispatch(searchActions.setDrinks({ drinks: searchResults }));
    } catch (error) {
      console.error("Error searching for cocktails:", error);
      navigate("/error");
    }
    navigate("/search");
  };

  return (
    <form onSubmit={handleSearch} className="form-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a cocktail..."
      />
      <button type="submit">
        <img src={searchImage} alt="Search" />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
