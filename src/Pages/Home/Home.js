import React, { Fragment } from 'react';
import Markdown from '../../Markdown/Markdown';
import './css/index.css'
import Technologies from './components/Technologies';
import Hero from './components/Hero';

const Home = () => {

  const mdWidth = 'md-width'
  const markdown = `
~~~js
const favParadigm = (paradigm) => \`I love \${paradigm} programming!\`;
~~~
`
  return (
    <Fragment>
      <Hero />
      <Markdown markdown={markdown} mdClassName={mdWidth} />
      <Technologies />
    </Fragment>
  );
};

export default Home;

