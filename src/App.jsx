import './App.css'
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
