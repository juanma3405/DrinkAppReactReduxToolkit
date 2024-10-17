import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchRandomDrink } from "./store/randomDrink-actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DrinkOfTheDay from "./components/DrinkOfTheDay";
import DrinkList from "./components/DrinkList";
import SearchFailed from "./components/SearchFailed";
import Error from "./components/Error";

const router = createBrowserRouter([
  { path: "/", element: <DrinkOfTheDay /> },
  { path: "/search", element: <DrinkList /> },
  { path: "/searchFailed", element: <SearchFailed /> },
  { path: "/error", element: <Error /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomDrink());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
