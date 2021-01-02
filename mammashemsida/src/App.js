
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>  
  );
}  
export default App;
