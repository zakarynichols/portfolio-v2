import React, { Fragment } from 'react';
import './css/index.css'
import Technologies from './components/Technologies';
import Hero from './components/Hero';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Technologies />
    </Fragment>
  );
};

export default Home;