import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import {
  ionic,
  typescript,
  react,
  css,
  node,
  postgres,
  figma,
  vscode,
  git,
  github,
  capacitor,
  firebase,
  redux,
  vue,
  go
} from '../technologies';

const Technologies = () => {

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

  return (
    <section className="technologies mt-3 container" style={{ marginBottom: '75px' }}>
      <h1 className="header-links"><strong>Technologies</strong></h1>

      <h3 className="pt-3 header-links fade-reveal load-hidden">Back End</h3>
      <div id="back-end" className="mx-3 icons">
        <div className="reveal load-hidden">
          <img className="img-responsive" src={node} alt="" />
          <span>Node</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={typescript} alt="" />
          <span>TypeScript</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={postgres} alt="" />
          <span>Postgres</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={go} alt="" />
          <span>Go</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={firebase} alt="" />
          <span>Firebase</span>
        </div>
      </div>

      <h3 className="pt-5 header-links fade-reveal load-hidden">Front End</h3>
      <div id="front-end" className="mx-3 icons">
        <div className="reveal load-hidden">
          <img className="img-responsive" src={react} alt="" />
          <span>React</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={redux} alt="" />
          <span>Redux</span>
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

      <h3 className="pt-5 header-links fade-reveal load-hidden">Tools</h3>
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
          <img className="img-responsive" src={figma} alt="" />
          <span>Figma</span>
        </div>
        <div className="reveal load-hidden">
          <img className="img-responsive" src={vscode} alt="" />
          <span>VSCode</span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;