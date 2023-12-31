import './App.css'
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import ThemeSelector from "./components/ThemeSelector";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>

      <BrowserRouter>
        <NavBar />
        <ThemeSelector />

        <Switch>
          <Route exact path="/">
            <Home />            
          </Route>
          <Route path="/create">
            <Create />            
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:recipe">
            <Recipe />
          </Route>
        </Switch>
        
      </BrowserRouter>

    </div>
  );
}

export default App
