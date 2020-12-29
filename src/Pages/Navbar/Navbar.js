import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <section className="topnav" id="myTopnav">
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link>
                        <Link to="/projects"><FontAwesomeIcon icon={faPencilRuler} /> PROJECTS</Link>
                        <a href="https://github.com/zaknicholsdev"><FontAwesomeIcon icon={faGithub} /> GITHUB</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x"></i>
                    <div className="narrowLinks hidden">
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link>
                        <Link to="/projects"><FontAwesomeIcon icon={faPencilRuler} /> PROJECTS</Link>
                        <a href="https://github.com/zaknicholsdev"><FontAwesomeIcon icon={faGithub} /> GITHUB</a>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;