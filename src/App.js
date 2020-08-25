import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import AddView from './components/AddComponent';
import ShowView from './components/ViewComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home'><Home /></Route>
          <Route path='/add'><AddView /></Route>
          <Route path='/view'><ShowView /></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;