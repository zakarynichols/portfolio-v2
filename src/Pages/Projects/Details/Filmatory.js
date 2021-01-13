import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const Filmatory = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const width = "w"
    const markdown = `
# ${name} 🎥
### [Live Demo](https://zaknicholsdev.github.io/filmatory/#/)
### [Code](https://github.com/zaknicholsdev/movie-search/tree/master)
Search for your favorite movie from the Open Movie Database (OMDB) API. You can view ratings, actors, posters, and plots of various different movies. Built with React to introduce myself to the new hooks API coming from classes.
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default Filmatory;