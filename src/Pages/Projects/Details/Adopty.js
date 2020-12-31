import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';

const Adopty = ({ name }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const width = "w"
    const markdown = `
# ${name} 🐾
### [Live Demo](https://zaknicholsdev.github.io/Adopty/#/)
### [Code](https://github.com/zaknicholsdev/Adopty)
*Tutorial coming soon!*
> Login as an administrator to manage inventory of cats and dogs. Visitors can view cats and dogs available for adoption. The admin can upload cats and dogs with various details and an image describing the adoptable pet. Built with Vue and Firebase.
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default Adopty;