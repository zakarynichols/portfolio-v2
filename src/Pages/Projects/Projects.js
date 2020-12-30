import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    handyDiet,
    bedTime,
    movieSearch,
    calc,
    adopty
} from './projectsExports';

const Projects = () => {
    const projects = [
        {
            name: 'bedtime-v2',
            image: bedTime,
            url: 'https://zaknicholsdev.github.io/bedtime-v2/'
        },
        {
            name: 'HandyDiet',
            image: handyDiet,
            url: ''
        },
        {
            name: 'Adopty',
            image: adopty,
            url: ''
        },
        {
            name: 'MovieSearch',
            image: movieSearch,
            url: ''
        },
        {
            name: 'Calculator',
            image: calc,
            url: ''
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
                            <Link to={`/project/${p.name}`} style={{ border: 'none', backgroundColor: '#1e2631' }} className="btn btn-primary">View</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Projects