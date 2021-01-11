import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const Adopty = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const width = "w"
    const markdown = `
# ${name} 🐾
### [Live Demo](https://zaknicholsdev.github.io/Adopty/#/)
### [Code](https://github.com/zaknicholsdev/Adopty)
Login as an administrator to manage inventory of cats and dogs. Visitors can view cats and dogs available for adoption. The admin can upload cats and dogs with various details and an image describing the adoptable pet. Built with Vue and Firebase.

### Features ✨
- Authentication & Authorization (Only for administrator.)
- Dashboard to manage inventory of cats, dogs, and capital campaign donations.
- Add cats, dogs, and capital campaign.
- Edit cats, dogs, and capital campaign.
- View cats, dogs, and capital campaign.
- Delete cats, dogs, and capital campaign.
- Upload images for cats and dogs.
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default Adopty;