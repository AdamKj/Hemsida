
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';
import {Services} from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
        </Switch>
      </Router>
    </div>  
  );
}  
export default App;
