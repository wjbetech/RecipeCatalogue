import "./Recipe.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useTheme } from "../../hooks/useTheme";
import { myProjectFirestore } from "../../firebase/config";

export default function Recipe() {

  // call our themes
  const { mode } = useTheme()

  // set states
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  // dynamically collect info from url
  const { recipe } = useParams();

  // get our data via useEffect
  useEffect(() => {
    setIsPending(true);
    myProjectFirestore.collection("recipes").doc(recipe).get()
    .then((document) => {
      if (document.exists) {
        setIsPending(false);
        setData(document.data())
      } else {
        setIsPending(false);
        setError("Could not find recipe!")
      }
    }
  )}, [recipe])

  return (
    <div className={`recipe recipe-${mode}`}>
      {isPending && <div className="pending">Fetching info...</div>}
      {error && <div className="error">{error}</div>}
      {data && (
        <>
          <h1 className="recipe-name">{data.title}</h1>
          <hr className="recipe-divider" />
          <ul className="recipe-ingredients">{data.ingredients.map(i => (
            <li key={i} className="ingredient-item">{i}</li>
          ))}</ul>
          <p className="recipe-time">Cooking time: {data.cookingTime}</p>
          <p className="recipe-method">{data.method}</p>
          <Link to="/">
            <button>Back to Recipes</button>
          </Link>
      </>
      )}
    </div>
  )
}