import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const HandyDiet = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const width = "w"
    const markdown = `
# ${name} 🍔
### [Live Demo](https://zaknicholsdev.github.io/HandyDiet/#/)
### [Code](https://github.com/zaknicholsdev/HandyDiet)
> EasyDiet is like a nutritionist in your pocket. Tell EasyDiet your target calories and diet type (keto, paleo, vegan, etc.) and EasyDiet will give you a custom daily or weekly diet. This app will fetch nutrition data such as macronutrients, calories, and details of recipes from the Spoonacular API. User interface built with React and data fetched from the Spoonacular API.
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default HandyDiet;