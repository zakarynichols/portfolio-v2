import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter style={tomorrow} language={language} children={value} />
    );
};

export default CodeBlock;