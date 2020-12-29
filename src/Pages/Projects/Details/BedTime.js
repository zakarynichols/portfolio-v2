import Markdown from '../../../Markdown/Markdown';

const BedTime = ({ name }) => {
    const width = "w"
    const markdown = `
# ${name}
wooo is this working.  
skdfljsdkfj
~~~js
const woo = () => 'woo';
~~~
~~~html
<div>some</div>
~~~

\`\`\`html
<div>asdofijsodfij</div>
\`\`\`

\`\`\`ts
const pip = (some:string): Person => 'wooo';
\`\`\`

\`\`\`css
.class {
    text-align: center;
};
\`\`\`
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default BedTime;