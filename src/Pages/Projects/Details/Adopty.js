import Markdown from '../../../Markdown/Markdown';

const Adopty = ({ name }) => {
    const width = "w"
    const markdown = `
# ${name}
wooo is this working.  
skdfljsdkfj
~~~js
const woo = () => 'woo';
~~~
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default Adopty;