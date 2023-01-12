import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PinAPI from './Components/PinAPI';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>

      <Route exact path="/Public-API-s/">
      <Home />
      </Route>

      <Route exact path="/pinapi:searchkey">
      <PinAPI/>
      </Route>

      </Switch>
    
    </BrowserRouter>
    </>
  );
}

export default App;
