import "./ThemeSelector.css"
import React from 'react'
import { useTheme } from "../hooks/useTheme"

export default function ThemeSelector() {
  return (
    <div className="theme-buttons">
      <button 
        className="selector" 
        style={{ background: "#a2b9bc" }}>
      </button>
      <button 
        className="selector" 
        style={{ background: "#b2ad7f" }}>
      </button>
      <button 
        className="selector" 
        style={{ background: "#6b5b95" }}>
      </button>
    </div>
  )
}
