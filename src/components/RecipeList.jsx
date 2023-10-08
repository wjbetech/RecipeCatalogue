import "./RecipeList.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function RecipeList({ recipes }) {

  return (
    <div className="recipe-list">
      {recipes.map(r => (
        <div key={r.id} className="card">
          <h3 className="card-title">{r.title}</h3>
          <p className="card-time">Cooking Time: {r.cookingTime}</p>
          <div className="card-method">{r.method.substring(0, 50)}...</div>
          <Link to={`/recipes/${r.id}`}>
            <button>View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
