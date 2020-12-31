import React, { Fragment, useEffect } from 'react'
import './App.css'
import {
  Switch,
  Route,
  // useHistory
} from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Project from './Pages/Projects/Project/Project';

const App = () => {

  // const history = useHistory();
  // useEffect(() => {
  //   return history.listen(({ pathname }) => {
  //     document.title = `Zak Nichols | ${pathname} | Portfolio`;
  //   });
  // }, [history.location]);

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/project/:name">
          <Project />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};
export default App;

