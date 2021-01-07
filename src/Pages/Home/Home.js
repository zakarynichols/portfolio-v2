import React, { Fragment } from 'react';
import Markdown from '../../Markdown/Markdown';
import './css/index.css'
import Technologies from './components/Technologies';
import Hero from './components/Hero';

const Home = () => {

  const mdWidth = 'md-width'
  const markdown = `
~~~javascript
const favParadigm = (paradigm) => \`I love \${paradigm} programming!\`;
const myFav = favParadigm('functional');
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

