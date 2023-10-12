import "./NavBar.css"
import React from 'react'
import { useTheme } from "../hooks/useTheme"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import SearchBar from "./SearchBar"

export default function NavBar() {

  const { changeBgColor, bgColor } = useTheme()
  
  return (
    <div className="navbar" style={{ background: bgColor }}>
      <nav>
          <Link to="/" className="brand">
              <h1>Recipe Catalogue</h1>
          </Link>
          <SearchBar />
          <Link to="/create">
              <p>Create Recipe</p>
          </Link>
      </nav>
    </div>
  )
}
