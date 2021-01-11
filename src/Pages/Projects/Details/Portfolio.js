import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const Portfolio = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const width = "w"
    const markdown = `
# Markdown Oriented ${name} 🤖
### [Live Demo - (You're already here!)](https://zaknichols.com)
### [Code](https://github.com/zaknicholsdev/portfolio-v2)
My personal portfolio. This is where I host all my side-projects and tutorials. I chose to implement a markdown parser and syntax highlighting. It's an amazing 
language to document software. Perfect for tutorials and describing each project. My goal is to have seperate sections of my portfolio for projects, tutorials, and blog posts in the near future.

### Example
Here's a small example showing you the markdown and syntax highlighting in action. Let's make a request to the Zelda API and it'll respond with a list of games! Copy the code and give it a try!
~~~js
const getZeldaGames = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const requestUrl = 'https://zelda-api.apius.cc/api/games';
    const url = proxyUrl + requestUrl;
    try {
        const response = await fetch(url);
        if (response.ok === true && response.status === 200) {
            const toJson = await response.json();
            console.warn(toJson);
        };
        if (response.ok === false) {
            throw new Error('Uh oh! There was an error!');
        };
    } catch (err) {
        console.error(err);
    };
};
getZeldaGames();
~~~

`
    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default Portfolio;