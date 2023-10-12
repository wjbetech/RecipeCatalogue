import "./Search.css"
import React from "react"
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import RecipeList from "../../components/RecipeList";

export default function Search() {

  // return the current location object
  const queryString = useLocation().search
  console.log(queryString)
  // define utilities for query string of URL
  const queryParams = new URLSearchParams(queryString)
  console.log(queryParams)
  // find the query in queryParams
  const query = queryParams.get("q")
  console.log(query)

  const url = "http://localhost:3000/recipes?q=" + query;
  const { data, isPending, error } = useFetch(url)

  return (
    <div>
			<h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}