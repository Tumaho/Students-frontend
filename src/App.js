import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Students from './components/students/students';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Route exact path='/students'>
          <Students />
        </Route>
    </Router>
  );
}

export default App;
