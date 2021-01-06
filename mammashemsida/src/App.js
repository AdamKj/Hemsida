
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';
import {Services} from './components/Services/Services';
import {About} from './components/About HK/About HK';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/About" component={About}/>
        </Switch>
      </Router>
    </div>  
  );
}  
export default App;
