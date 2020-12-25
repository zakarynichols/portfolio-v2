import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock';
import '../App.css'

const Markdown = ({markdown, mdClassName}) => {
    return (
        <ReactMarkdown className={mdClassName} language="javascript" renderers={{code: CodeBlock}} children={markdown} />
    );
};

export default Markdown;