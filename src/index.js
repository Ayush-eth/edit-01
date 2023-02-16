import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Route,Routes as Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import Room from './components/Room';



const routing =(
  <Router>
    <Switch>
      <Route exact path="/"  element={<App />} />
      <Route exact path="/home"  element={<HomeScreen />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
