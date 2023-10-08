import "./Recipe.css"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Recipe() {

  // dynamically collect info from url
  const { recipe } = useParams();
  const url = `http://localhost:3000/recipes/` + recipe;
  const { data: r, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {isPending && <div className="pending">Fetching info...</div>}
      {error && <div className="error">{error}</div>}
      {r && (
        <>
          <h1 className="recipe-name">{r.title}</h1>
          <hr className="recipe-divider" />
          <ul className="recipe-ingredients">{r.ingredients.map(i => (
            <li className="ingredient-item">{i}</li>
          ))}</ul>
          <p className="recipe-time">Cooking time: {r.cookingTime}</p>
          <p className="recipe-method">{r.method}</p>
          <Link to="/">
            <button>Back to Recipes</button>
          </Link>
      </>
      )}
    </div>
  )
}