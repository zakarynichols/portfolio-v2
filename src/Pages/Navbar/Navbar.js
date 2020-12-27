import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="topnav" id="myTopnav">
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <Link to="/">HOME</Link>
                        <Link to="/projects">PROJECTS</Link>
                        <a href="https://github.com/zaknicholsdev">GITHUB</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x"></i>
                    <div className="narrowLinks hidden">
                        <Link to="/">HOME</Link>
                        <Link to="/projects">PROJECTS</Link>
                        <a href="https://github.com/zaknicholsdev">GITHUB</a>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;