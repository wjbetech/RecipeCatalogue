import "./RecipeList.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useTheme } from "../hooks/useTheme"

export default function RecipeList({ recipes }) {

  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className="error">No recipes found!</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(r => (
        <div key={r.id} className={`card ${mode}`}>
          <h3 className="card-title">{r.title}</h3>
          <p className="card-time">Cooking Time: {r.cookingTime} mins</p>
          <div className="card-method">{r.method.substring(0, 50)}...</div>
          <Link to={`/recipes/${r.id}`}>
            <button>View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
