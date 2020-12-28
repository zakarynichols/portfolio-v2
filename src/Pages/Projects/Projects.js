import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
    handyDiet,
    bedTime,
    moovy,
    calc
} from './projectsExports';

const Projects = () => {
    const projects = [
        {
            name: 'HandyDiet',
            image: handyDiet,
        },
        {
            name: 'React Calculator',
            image: calc,
        },        {
            name: 'BedTime',
            image: bedTime,
        }
    ];

    return (
        <div style={{display: 'flex', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap'}}>
            {projects.map((p, index) => {
            return (
            <div key={index} className="card m-3" style={{ width: '18rem'}}>
                <img className="card-img-top" src={p.image} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{p.name}</h5>
                    {/* <p className="card-text">{p.description}</p> */}
                    <Link to={`/project/${p.name}`} style={{border: 'none', backgroundColor: '#1e2631'}} className="btn btn-primary">Details</Link>
                </div>
            </div>
            );
        })}
        </div>
    )
}

export default Projects