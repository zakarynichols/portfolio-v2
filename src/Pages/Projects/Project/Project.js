import { useParams } from 'react-router-dom';
import './Project.css';
import BedTime from '../Details/BedTime';
import HandyDiet from '../Details/HandyDiet';
import Adopty from '../Details/Adopty';
import Calculator from '../Details/Calculator';
import MovieSearch from '../Details/MovieSearch';
import HandyDietV2 from '../Details/HandyDietV2';

const Project = () => {
    const { name } = useParams();

    switch (name) {
        case 'BedTime-v2':
            return <BedTime name={name} />
        case 'EasyDiet':
            return <HandyDiet name={name} />
        case 'Adopty':
            return <Adopty name={name} />
        case 'Calculator':
            return <Calculator name={name} />
        case 'MovieSearch':
            return <MovieSearch name={name} />
        case 'HandyDiet-v2':
            return <HandyDietV2 name={name} />
        default:
            return console.error(`Sorry, there's no project named: ${name}.`);
    };
};

export default Project;