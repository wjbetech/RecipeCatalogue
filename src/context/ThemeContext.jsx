import { createContext, useReducer } from "react";

// export createContext as ThemeContext
export const ThemeContext = createContext();

// set theme elements depending on action
const themeReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_BG_COLOR":
			return { ...state, bgColor: action.payload }
		case "CHANGE_MODE":
			return { ...state, mode: action.payload }
		default:
			return state
	}
}

// export our provider globally
export function ThemeProvider({ children }) {

	// set reducer with props to send out
	const [state, dispatch] =  useReducer(themeReducer, {
		bgColor: "#FFCF9D",
		mode: "light"
	})

	// func for changing background color of elements
	const changeBgColor = (bgColor) => {
		dispatch({ type: "CHANGE_BG_COLOR", payload: bgColor });
	};

	// func for dark/light toggle
	const changeMode = (mode) => {
		dispatch({ type: "CHANGE_MODE", payload: mode });
	};

	// export our reducer and funcs for other components to consume
	return (
		<ThemeContext.Provider value={{ ...state, changeBgColor, changeMode }}>
			{children}
		</ThemeContext.Provider>
	)
}