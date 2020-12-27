const Navbar = () => {
    return (
        <section className="topnav" id="myTopnav">
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#">HOME</a>
                        <a href="./projects.html">PROJECTS</a>
                        <a href="https://github.com/zaknicholsdev">GITHUB</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x"></i>
                    <div className="narrowLinks hidden">
                        <a href="#">HOME</a>
                        <a href="./projects.html">PROJECTS</a>
                        <a href="https://github.com/zaknicholsdev">GITHUB</a>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;