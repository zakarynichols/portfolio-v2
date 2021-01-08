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
import Project from './Pages/Projects/Project/Project';

const App = () => {

  useEffect(() => {
    document.title = `Zak Nichols | Portfolio`
  }, []);

// const history = useHistory();
// useEffect(() => {
//   history.listen(({ pathname }) => {
//     document.title = `Zak Nichols | ${pathname} | Portfolio`;
//   });
// }, [history.location.pathname]);

(() => {
  console.log('%c%s', 'color: white; background: black; font-size: 24px; border: 1px solid black; border-radius: 10px; padding: 5px;', 'I see you! 👋')
})();

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

