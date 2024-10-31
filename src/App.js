import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchRandomDrink } from "./store/randomDrink-actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DrinkOfTheDay from "./components/DrinkOfTheDay";
import DrinkList from "./components/DrinkList";
import SearchFailed from "./components/SearchFailed";
import Error from "./components/Error";
import ChosenDrink from "./components/ChosenDrink.js";

const router = createBrowserRouter([
  { path: "/", element: <DrinkOfTheDay /> },
  { path: "/dayDrink", element: <DrinkOfTheDay /> },
  { path: "/search", element: <DrinkList /> },
  { path: "/searchFailed", element: <SearchFailed /> },
  { path: "/chosenDrink", element: <ChosenDrink /> },
  { path: "/error", element: <Error /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedDrink = sessionStorage.getItem("dayDrink");
    if (!storedDrink) {
      dispatch(fetchRandomDrink());
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
