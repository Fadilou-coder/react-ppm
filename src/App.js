import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { EnrgVisite } from './pages/enrg-visite/enrg-visite';
import { ListVisite } from './pages/list-visite/list-visite';
import { ListVisiteur } from './pages/visiteur/list-visiteur';
import { VisiteByVisiteur } from './pages/visiteur/visite-by-visiteur';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/enrg-visite" component={EnrgVisite}/>
          <Route exact path="/list-visite" component={ListVisite}/>
          <Route exact path="/list-visiteur" component={ListVisiteur}/>
          <Route exact path="/list-visites-by-visiteur" component={VisiteByVisiteur}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
