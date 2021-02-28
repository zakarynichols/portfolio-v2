import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <section className="hero my-3 hero-max-width">
            <h1 className="header-links">
                <strong>Zak Nichols</strong>
            </h1>
            <p className="mt-3 mx-2">
                Full-Stack Software Engineer from Elkhart, IN. Currently working at Spectrum Net Designs. Self-taught with a focus on functional programming and object-oriented programming.
            </p>
            <p className="mt-3 mx-2">
                Professional experience writing RESTful web services, crafting complex queries in SQL, managing global/local UI state, and writing testable and performant code.
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