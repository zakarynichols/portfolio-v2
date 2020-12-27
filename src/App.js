import React, { Fragment, useEffect } from 'react'
import './App.css'
import {
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  )
};
export default App;

