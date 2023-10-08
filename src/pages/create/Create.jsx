import { useState } from "react"
import "./Create.css"

export default function Create() {

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

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
            type="text"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            className="cooking-time-input"
            required
          />
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
      </form>
    </div>
  )
}
