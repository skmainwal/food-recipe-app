import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import "./index.css";

import Axios from "axios";

import Card from "./components/Card";

export default function App() {
  const [search, setSearch] = useState("chicken");

  const [recipes, setRecipes] = useState([]);

  const APP_ID = "8efabc41";
  const APP_KEY = "cdf7bb58c8b06246a1027a821f482064";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //console.log(response.data.hits);

    setRecipes(response.data.hits);
  };
  //console.log(recipes);

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  const searchInput = () => {
    getRecipes();
  };

  return (
    <div className="App">
      <Searchbar
        search={search}
        onInputChange={onInputChange}
        searchInput={searchInput}
      />

      <div className="container">
        {/* <Card/> */}
        <Card recipes={recipes} />
      </div>
    </div>
  );
}
