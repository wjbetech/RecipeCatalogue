import { useState } from "react"
import "./Create.css"

export default function Create() {

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form>
        <label>
          <span>Recipe Name:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="title-input"
            required
          />
        </label>
        <label>
          <span>Cooking Time (mins):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            className="cooking-time-input"
            required
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <div className="ingredients-list">
            <input type="text" />
            <ul className="form-button">{ingredients.map(i => (
              <li>{i}</li>
            ))}</ul>
            <button 
              className="ingredients-button"
              onChange={(e) => setIngredients(e.target.value)}  
            >
            Add
            </button>
          </div>
        </label>
        <label>
          <span>Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            className="method-input"
            required
          />
        </label>

        <button
          className="form-button"
          onSubmit={handleSubmit}
        >Submit</button>
      </form>
    </div>
  )
}
