import "./ThemeSelector.css"
import React from 'react'
import { useTheme } from "../hooks/useTheme"
import lightIcon from "../assets/light-mode.svg"
import darkIcon from "../assets/dark-mode.svg"

const themeColors = ["#a2b9bc", "#b2ad7f", "#C3B1E1"];

export default function ThemeSelector() {

  const { changeBgColor, changeMode, mode } = useTheme()

  const handleToggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light")
  }

  return (
    <div className="theme-buttons">
      <div className="mode-selector">
        <img 
          src={mode === "light" ? `${darkIcon}` : `${lightIcon}`} 
          alt="mode toggle"
          onClick={handleToggleMode}
        />
      </div>
      <div className="color-buttons">
        {themeColors.map((color) => {
          return (
            <button 
              key={color}
              className="selector" 
              style={{ background: color }}
              onClick={() => changeBgColor(color)}
              >
            </button>
          )
        })}
      </div>
    </div>
  )
}
