import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './components/Home/Home';
import {NavBar} from './components/Navbar/Navbar';
import {Services} from './components/Services/Services';
import {About} from './components/About HK/About HK';
import {CustomerReviews} from './components/Customer Reviews/CustomerReviews';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tjanster" component={Services} />
          <Route exact path="/om-hk-redovisning" component={About}/>
          <Route exact path="/referenser-omdomen" component={CustomerReviews}/>
        </Switch>
      </Router>
    </div>  
  );
}  
export default App;
