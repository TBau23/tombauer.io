import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import Header from './Header';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import Landing from './Pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Tom Bauer</h1>

        <Switch>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
