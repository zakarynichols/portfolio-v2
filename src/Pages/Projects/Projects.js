import { Link } from 'react-router-dom';
import {
    handyDiet,
    bedTime,
    movieSearch,
    calc,
    adopty,
    handydietV2
} from './projectsExports';

const Projects = () => {
    const projects = [
        {
            name: 'BedTime-v2',
            image: bedTime,
            tech: [
                { class: 'devicon-typescript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'Adopty',
            image: adopty,
            tech: [
                { class: 'devicon-vuejs-plain colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'HandyDiet-v2',
            image: handydietV2,
            tech: [
                { class: 'devicon-react-original colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'EasyDiet',
            image: handyDiet,
            tech: [
                { class: 'devicon-react-original colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'MovieSearch',
            image: movieSearch,
            tech: [
                { class: 'devicon-react-original colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'Calculator',
            image: calc,
            tech: [
                { class: 'devicon-react-original colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        }
    ];

    return (
        <div>
            <div className="container mt-2 hero-max-width" style={{ margin: 'auto' }}>
                <h1 className="header-links mx-2 text-center" style={{ fontSize: '2.5em' }}>
                    <strong>Projects</strong>
                </h1>
                <p>
                    As a professional software developer I've crafted many solutions to many different problems.
                    It's allowed me to see the many patterns and paradigms in JavaScript and it's ecosystem.
                </p>
                <p>I'm re-writing each project and including a tutorial in hopes that other's can get some benefit. In my experience building applications 
                    has been the most efficient way to grow.
                </p>
                <p>
                    I'm a programmer first, not a teacher. If I'm not clear or something doesn't make sense, I apologize. I'm always looking for ways to improve my teaching. Send me an email and maybe I can help. - <a href="mailto:portfolio@zaknichols.com">portfolio@zaknichols.com</a> 
                </p>
            </div>
            <div style={{ width: '75vw', margin: 'auto', display: 'flex', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {projects.map((p, index) => {
                    return (
                        <div key={index} className="card m-3" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={p.image} alt="Project" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{p.name}</h5>
                                <div>
                                    {p.tech.map((t, index) => {
                                        return (
                                            <i key={index} style={{ fontSize: '1.5em' }} className={t.class} />
                                        );
                                    })}
                                </div>
                                <br />
                                <Link to={`/project/${p.name}`} style={{ border: 'none', backgroundColor: '#1e2631' }} className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects