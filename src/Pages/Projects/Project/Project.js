import { Redirect, useParams } from 'react-router-dom';
import './Project.css';
import BedTime from '../Details/BedTime'

const Project = () => {
    const { name } = useParams();
    if (name === 'BedTime') {
        return <BedTime name={name} />
    } else {
        return <Redirect to="/projects" />
    };
};

export default Project;