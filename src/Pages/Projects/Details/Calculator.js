import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const Calculator = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const width = "w"
    const markdown = `
# ${name} ➗
### [Live Demo](https://zaknicholsdev.github.io/react-calculator/#/)
### [Code](https://github.com/zaknicholsdev/react-calculator)
A calculator I built with React using functional components and hooks. There are several functions to handle the button events. Including handling operators, digits, screen-scaling, exponential notation, and more.
`
    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default Calculator;