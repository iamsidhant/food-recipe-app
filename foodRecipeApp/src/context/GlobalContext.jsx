import React from 'react'
import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function GlobalContext({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList, setFavouritesList] = useState([])

    const navigate  = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
    }

    function handleAddToFavourite(getCurrentItem){
        console.log(getCurrentItem);
    }

    console.log(favouritesList, 'favouritesList');

  return (
    <GlobalContext.Provider
    value = {{
        searchParam,
        loading,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourite,
        favouritesList
        }}
    >
        { children }
    </GlobalContext.Provider>
  )
}
