import { Fragment } from 'react';
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
            name: 'bedtime-v2',
            image: bedTime,
            tech: [
                { class: 'devicon-javascript-plain colored mr-1' },
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
            name: 'handydiet-v2',
            image: handydietV2,
            tech: [
                { class: 'devicon-react-original colored mr-1' },
                { class: 'devicon-javascript-plain colored mr-1' },
                { class: 'devicon-html5-plain colored mr-1' },
                { class: 'devicon-css3-plain colored' }
            ]
        },
        {
            name: 'HandyDiet',
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
        <div style={{ width: '75vw', margin: 'auto', display: 'flex', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {projects.map((p, index) => {
                return (
                    <div key={index} className="card m-3" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={p.image} alt="Card image cap" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{p.name}</h5>
                            {/* <p className="card-text">{p.description}</p> */}
                            <div>
                                {p.tech.map(t => {
                                    return (
                                        <i style={{ fontSize: '1.5em' }} className={t.class} />
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
    );
};

export default Projects