import React, { Fragment, useEffect } from 'react';
import Markdown from '../../Markdown/Markdown';
import './css/index.css'
import ScrollReveal from 'scrollreveal';
import Navbar from "../Navbar/Navbar";
import Technologies from './components/Technologies';
import Hero from './components/Hero';
import Footer from '../Footer/Footer';

const Home = () => {

  useEffect(() => {
    ScrollReveal({
      duration: 1000,
    })
    const options = {
      distance: '20px',
      origin: 'left',
      interval: 120,
    };
    const fadeOptions = {
      interval: 480
    }
    ScrollReveal().reveal('.reveal', options)
    ScrollReveal().reveal('.fade-reveal', fadeOptions)
  }, []);

  const mdWidth = 'md-width'
  const markdown = `
# Did it work?
How about this paragraph. Will it listen?  
How about a *line break*. Can it be that easy?  
**Nope!** Make sure you use two spaces at the end  
of the sentence!
~~~js
const embedAnExpresion = (exp) => \`Look at this \${exp}\`;
~~~
`
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Markdown markdown={markdown} mdClassName={mdWidth} />
      <Technologies />
      <Footer />
    </Fragment>
  );
};

export default Home;

