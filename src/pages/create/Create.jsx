import "./Create.css"
import { useState, useRef, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme";

export default function Create() {

  const { mode } = useTheme()

  // state setters
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const history = useHistory()

  // useRef
  const ingredientInput = useRef(null)

  // useFetch
  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST")

  // useEffect
  useEffect(() => {
    data && history.push("/")
  }, [data])
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked!")
    postData({
      title, 
      ingredients, 
      method, 
      cookingTime: cookingTime + " minutes"
    })
  }

  const handleAddIngredients = (e) => {
    e.preventDefault();
    const ingred = newIngredient.trim();
    if (ingred && !ingredients.includes(ingred)) {
      setIngredients(prevIngredients => [...prevIngredients, ingred])
    } 
    setNewIngredient("");
    ingredientInput.current.focus();
  }

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a New Recipe</h2>
      <form className={`${mode}`} onSubmit={handleSubmit}>
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
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button 
              className="ingredients-button"
              onClick={handleAddIngredients}  
            >
            Add
            </button>
            <ul className="ingredients">
              {ingredients.map(i => (<li key={i}>{i}</li>))}
            </ul>
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

        <button className="form-button">Submit</button>

      </form>
    </div>
  )
}
