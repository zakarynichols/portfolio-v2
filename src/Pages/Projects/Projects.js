import './Project/projects.css'

const Projects = () => {
    return (
        <div style={{marginBottom: '5em'}}>
            <div className=" reveal container mt-2 hero-max-width" style={{ margin: 'auto' }}>
                <h1 className="header-links mx-2 text-center" style={{ fontSize: '2.5em' }}>
                    <strong>Projects</strong>
                </h1>
            </div>
            <div className="mt-2 p">
                <div className="project reveal ">
                    <h4>CLI File Downloader <span className="pill go">Go</span></h4>
                    <p>A file downloading CLI tool. Built without extending Go's standard library. This tool breaks large downloads into chunks to process individually with goroutines.<a href="https://github.com/zaknicholsdev/cli-file-downloader"> zaknicholsdev/cli-file-downloader</a></p>
                </div>
                <div className="project reveal">
                    <h4>Athlete Ranking Social Network <span className="pill javascript mr-1">JavaScript</span><span className="pill nodejs mr-1">Node</span><span className="pill postgres mr-1">Postgres</span><span className="pill reactjs">React</span></h4>
                    <p>A full-stack JavaScript application where you can register for an account, upload pictures, vote and comment on your favorite athletes from different leagues. The highest voted athlete rates at the top.<a href="https://github.com/zaknicholsdev/online-warrior-classic"> zaknicholsdev/online-warrior-classic</a></p>
                </div>
                <div className="project reveal">
                    <h4>Animal Shelter Manager <span className="pill javascript mr-1">JavaScript</span><span className="pill firebase mr-1">Firebase</span><span className="pill vue mr-1">Vue</span></h4>
                    <p>Login as an administrator to manage inventory of cats and dogs. Visitors can view cats and dogs available for adoption. The admin can upload cats and dogs with various details and an image describing the adoptable pet. Built with Vue and Firebase.<a href="https://github.com/zaknicholsdev/adopty"> zaknicholsdev/adopty</a></p>
                </div>
                <div className="project reveal">
                    <h4>Late Sleeper <span className="pill typescript">TypeScript</span></h4>
                    <p>Input a time you'd like to go to bed or wake up and get back the best times to sleep based on sleep cycles. <a href="https://github.com/zaknicholsdev/late-sleeper"> zaknicholsdev/late-sleeper</a></p>
                </div>
                <div className="project reveal">
                    <h4>Filmatory <span className="pill javascript mr-1">JavaScript</span><span className="pill reactjs">React</span></h4>
                    <p>Search for your favorite movies and get many different data points. The OMDB API web service will respond with actors, release date, run-time, ratings, plot, etc.<a href="https://github.com/zaknicholsdev/filmatory"> zaknicholsdev/filmatory</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects