import { useParams } from 'react-router-dom';
import './Project.css';
import BedTime from '../Details/BedTime';
import HandyDiet from '../Details/HandyDiet';
import Adopty from '../Details/Adopty';
import Calculator from '../Details/Calculator';
import MovieSearch from '../Details/MovieSearch';

const Project = () => {
    const { name } = useParams();;

    switch (name) {
        case 'BedTime':
            return <BedTime name={name} />
        case 'HandyDiet':
            return <HandyDiet name={name} />
        case 'Adopty':
            return <Adopty name={name} />
        case 'Calculator':
            return <Calculator name={name} />
        case 'MovieSearch':
            return <MovieSearch name={name} />
        default:
            return console.error(`Sorry, we are out of ${name}.`);
    };
};

export default Project;