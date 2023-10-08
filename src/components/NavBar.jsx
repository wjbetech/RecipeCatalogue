import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Recipe Catalogue</h1>
            </Link>
            <Link to="/create">
                <p>Create Recipe</p>
            </Link>
        </nav>
    </div>
  )
}
