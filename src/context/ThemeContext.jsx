import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_BG_COLOR":
			return { ...state, bgColor: action.payload }
		default:
			return state
	}
}

export function ThemeProvider({ children }) {

	const [state, dispatch] =  useReducer(themeReducer, {
		bgColor: "#FFCF9D",
	})

	const changeBgColor = (bgColor) => {
		dispatch({ type: "CHANGE_BG_COLOR", payload: bgColor });
	}

	return (
		<ThemeContext.Provider value={{ ...state, changeBgColor }}>
			{children}
		</ThemeContext.Provider>
	)
}