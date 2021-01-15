import { Link } from 'react-router-dom';
import {
    handyDiet,
    bedTime,
    movieSearch,
    calc,
    adopty,
    handydietV2,
    onlineWarriorClassic,
    markdown,
    portfolio
} from './projectsExports';
import { firebase } from '../../Pages/Home/technologies';

const Projects = () => {
    const projects = [
        {
            name: 'LateSleeper 🌒',
            image: bedTime,
            description: 'Give LateSleeper a time you\'d like to go to bed and get back the best times to sleep based on sleep cycles.',
            tech: [
                { class: 'devicon-typescript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' },
            ]
        },
        {
            name: 'Online Warrior Classic 🏆',
            image: onlineWarriorClassic,
            description: 'Register for an account to vote and comment on your favorite athletes from different leagues. The highest voted athlete rates at the top.',
            tech: [
                { class: 'devicon-nodejs-plain colored mr-1' },
                { class: 'devicon-postgresql-plain colored mr-1' },
                { class: 'devicon-react-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' },
            ]
        },
        {
            name: 'Adopty',
            image: adopty,
            description: 'Log in as an administrator to manage the inventory of cats and dogs in the animal shelter. Potential adopters can view pets once added.',
            tech: [
                { class: 'devicon-vuejs-plain colored' },
                { class: firebase },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'Portfolio',
            image: portfolio,
            description: 'The source code to my little home on the internet.',
            tech: [
                { class: 'devicon-react-plain colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' },
                { class: markdown },
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
            name: 'Filmatory',
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
                <p>In my free time, I've been writing tutorials in hopes that others can get some benefit. In my experience, building applications have been the most efficient way to grow, so I'm trying to attach a tutorial to each project.
                </p>
                <p>
                    If something in my tutorials are not clear or something doesn't make sense, I apologize. I'm always looking for ways to improve my teaching. Send me an email and maybe I can help. - <a href="mailto:portfolio@zaknichols.com">portfolio@zaknichols.com</a>
                </p>
            </div>
            <div style={{ width: '75vw', margin: 'auto', display: 'flex', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {projects.map((p, index) => {
                    return (
                        <div key={index} className="card m-3" style={{ width: '18rem' }}>
                            <img loading="lazy" className="card-img-top" src={p.image} alt="Project" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{p.name}</h5>
                                <div>
                                    {p.tech.map((t, index) => {
                                        if (t.class === firebase) {
                                            return <img key={index} alt="firebase" src={firebase} style={{ marginTop: '-12.5px', width: '22.5px', height: '22px' }} />
                                        };
                                        if (t.class === markdown) {
                                            return <img key={index} alt="markdown" src={markdown} style={{ marginTop: '-12.5px', marginRight: '4px', marginLeft: '4px', width: '22.5px', height: '22px' }} />
                                        }
                                        return (
                                            <i key={index} style={{ fontSize: '1.5em' }} className={t.class} />
                                        );
                                    })}
                                </div>
                                <p style={{ boxSizing: 'border-box', flexBasis: '100%' }}>{p.description}</p>
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