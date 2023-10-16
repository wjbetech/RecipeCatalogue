import React, { useEffect, useState } from 'react'
import "./Home.css"
import RecipeList from "../../components/RecipeList";
import { myProjectFirestore } from "../../firebase/config";


export default function Home() {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    // start data fetching process
    setIsPending(true);

    // send for data
    myProjectFirestore.collection("recipes").get()
    .then((snapshot) => {
      if (snapshot.empty) {
        setError("No recipes found!");
        setIsPending(false);
      } else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setData(results)
        setIsPending(false)
      }
    })
    .catch(error => {
      setError(error)
      console.log("ERROR!", error)
    })
  }, []);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {data && <RecipeList recipes={data} />}

    </div>
  )
}