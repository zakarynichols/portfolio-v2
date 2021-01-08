import React, { Fragment } from 'react';
import Markdown from '../../Markdown/Markdown';
import './css/index.css'
import Technologies from './components/Technologies';
import Hero from './components/Hero';

const Home = () => {
  const mdWidth = 'md-width'
  const markdown = `
~~~
const favoriteParadigm = (paradigm) => \`I love \${paradigm} programming!\`;
const myFavorite = ('functional');
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

