import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <section className="hero container my-3 hero-max-width">
            <h1 className="header-links mx-2 text-center">
                <strong>Hi, I'm Zak <span className="wave">👋</span></strong>
            </h1>
            <p className="mt-3 mx-2">
                Full-Stack Software Engineer from Elkhart, IN. Self-taught with a focus on functional programming. Interested in all web technologies.
            </p>
            <p className="mt-3 mx-2">
                Experience developing dynamic user interfaces in JavaScript, manipulating the DOM, managing state, consuming API's, HTTP Protocol,
                writing queries in SQL, and building API's in Node with RESTful architecture.
            </p>
            <div className="hero-buttons text-center">
                <Link className="btn text-white m-2 py-2 header-links project-button" to="/projects">
                    <FontAwesomeIcon icon={faPencilRuler} /><span> PROJECTS</span>
                </Link>
                <a className="btn text-white m-2 py-2 header-links g-button" href="https://github.com/zaknicholsdev">
                    <FontAwesomeIcon icon={faGithub} /><span> GITHUB</span>
                </a>
            </div>
        </section>
    );
};
export default Hero;