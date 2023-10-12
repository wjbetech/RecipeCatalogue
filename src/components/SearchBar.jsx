import "./SearchBar.css"
import React from 'react'
import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function SearchBar() {

	const [input, setInput] = useState("")
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted!")
		console.log(e)

		// set dynamic parameter
		history.push(`/search?q=${input}`)
	}

  return (
    <div className="searchbar">
			<form onSubmit={handleSubmit}>
				<label htmlFor="search">Search:
				</label>
				<input 
					type="text" 
					id="search" 
					onChange={(e) => setInput(e.target.value)}
					required
				/>
			</form>
    </div>
  )
}
