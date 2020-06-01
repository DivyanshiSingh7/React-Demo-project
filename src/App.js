import React from 'react';
import Navbar from './components/Navbar'
import home from './components/home'
import {Route,Switch} from 'react-router-dom'
import LearnMore from './components/LearnMore'
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
     
      <Route exact path="/learnmore" component = {LearnMore} />
      <Route exact path="/" component = {home} />
      
    </Switch>
    </div>
  );
}

export default App;
