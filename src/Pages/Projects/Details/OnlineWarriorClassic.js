import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const OnlineWarriorClassic = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const width = "w"
    const markdown = `
# ${name} 🏆
### [Code](https://github.com/zaknicholsdev/online-warrior-classic)
Online Warrior Classic is a full-stack web application where users can vote, discuss, and favorite different athletes from various leagues. The most favorited athletes will rank the highest.  


### Features ✨
- Authentication & Authorization (httyOnly secure cookie)
- View popular athletes
- Sort athletes by league
- Like different athletes
- Comment and discuss different athletes
- Save favorite athletes to view later
- Edit profile
- Delete profile

### In progress... ✏️
- Roles [Admin, moderator, user] 
`
    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default OnlineWarriorClassic;