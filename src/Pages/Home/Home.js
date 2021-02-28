import React, { Fragment } from 'react';
import './css/index.css'
import Technologies from './components/Technologies';
import Hero from './components/Hero';

const Home = () => {
  return (
    <Fragment>
      <div className="container" style={{ maxWidth: '768px', margin: 'auto' }}>
        <Hero />
        <Technologies />
      </div>
    </Fragment>
  );
};

export default Home;