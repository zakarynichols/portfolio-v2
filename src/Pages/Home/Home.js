import React, { useEffect } from 'react';
import Markdown from '../../Markdown/Markdown';
import './css/index.css'
import {
  javascript,
  ionic,
  vue,
  react,
  css,
  node,
  postgres,
  mysql,
  mongo,
  ubuntu,
  php,
  figma,
  vscode,
  git,
  github,
  capacitor
} from './technologies';
import ScrollReveal from 'scrollreveal';
import Navbar from "../Navbar/Navbar";
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
    <div>
      <div>
        <Navbar />
        <section className="hero container my-5 hero-max-width text-center">
          <h1 className="header-links mx-2">
            <strong>Hi, I'm Zak <span className="wave">👋</span></strong>
          </h1>
          <p className="mt-3 mx-2">
            UI/UX Developer from Elkhart, IN. Self-taught with a focus on functional programming. Interested in all front-end technologies.
      </p>
          <p>Experience developing dynamic user interfaces in JavaScript, DOM manipulation, managing state, consuming API's, HTTP Protocol,
         writing queries in SQL, and building API's in Node with RESTful architecture.</p>
          <div className="hero-buttons text-center">
            <a className="btn text-white m-2 py-2 header-links project-button" href="./projects.html">
              PROJECTS
        </a>
          </div>
        </section>

        <Markdown markdown={markdown} mdClassName={mdWidth} />

        <section className="technologies container" style={{marginBottom: '10%'}}>
          <h1 className="header-links"><strong>Technologies</strong></h1>
          <h3 className="pt-3 header-links fade-reveal load-hidden">Front End</h3>
          <div id="front-end" className="mx-3 icons">
            <div className="reveal load-hidden">
              <img className="img-responsive" src={javascript} alt="" />
              <span>JavaScript</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={react} alt="" />
              <span>React</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={vue} alt="" />
              <span>Vue</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={ionic} alt="" />
              <span>Ionic</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={css} alt="" />
              <span>CSS</span>
            </div>
          </div>

          <h3 className="pt-5 header-links fade-reveal load-hidden">Back End</h3>
          <div id="back-end" className="mx-3 icons">
            <div className="reveal load-hidden">
              <img className="img-responsive" src={node} alt="" />
              <span>Node</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={postgres} alt="" />
              <span>PostgreSQL</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={mysql} alt="" />
              <span>MySQL</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={mongo} alt="" />
              <span>MongoDB</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={php} alt="" />
              <span>PHP</span>
            </div>
          </div>

          <h3 className="pt-5 header-links fade-reveal load-hidden">DevOps & Tools</h3>
          <div className="mx-3 icons" id="dev-ops">
            <div className="reveal load-hidden">
              <img className="img-responsive" src={git} alt="" />
              <span>Git</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={github} alt="" />
              <span>Github</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={capacitor} alt="" />
              <span>Capacitor</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={ubuntu} alt="" />
              <span>Ubuntu</span>
            </div>
            <div className="reveal load-hidden">
              <img className="img-responsive" src={vscode} alt="" />
              <span>VSCode</span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

