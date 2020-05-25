import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Results from './results';
import './App.css';

const App = () => {

  return (
    <Router>
    <Switch>
      <Route>
        <div className="App">
          <header className="App-header">
            <h2>Form</h2>
            <form>
              <label>Name 
              <input type="text" placeholder="Enter your name" required />
              </label><br/>
              <label>Email 
              <input type="email" placeholder="Enter your email" required />
              </label><br/>
              <label>Age 
              <input type="number" placeholder="Enter your age" required />
              </label><br/>
              <Link to="/results">Submit</Link>
            </form>
          </header>
        </div>
      </Route>
    
      <Route path="/results">
        <Results/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
