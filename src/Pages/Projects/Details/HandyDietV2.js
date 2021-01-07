import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const HandyDietV2 = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const width = "w"
    const markdown = `
# ${name} 🥙
### [Live Demo](https://zaknicholsdev.github.io/handydiet-v2/#/)
### [Code](https://github.com/zaknicholsdev/handydiet-v2)
This project is a rewrite of my original EasyDiet application (still in progress..) migrating from class based components and lifecycle methods to functional components and hooks. This time with brand new features and user interface!  
## Spoonacular API 🥄

The data comes from the third party API, Spoonacular. They're one of the largest nutritional API's and have plenty of different parameters to search for different meal plans, restaurant menu items, and recipes.

### Get Started 🚀

- sign up for API key on [Spoonacular Website](https://spoonacular.com/food-api).
- click the green **Start Now** button in the top-right corner.
- login and click **My Console** button in the top-right corner.
- click **Profile** tab on left.
- click **Show/Hide API Key** and copy the key.
- clone repo.
- create \`.env\` file inside root.
- inside \`.env\` type \`REACT_APP_SPOONACULAR_API_KEY=your api key here...\`
- run \`npm install\`.
- run \`npm start\`.
- live reload will serve at \`http://localhost:3000\`.
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default HandyDietV2;