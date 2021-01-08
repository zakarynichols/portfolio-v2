import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Pages/Home/css/index.css';  

const CodeBlock = ({ value, language }) => {
    return (
        <SyntaxHighlighter style={tomorrow} language='typescript' children={value} />
    );
};

export default CodeBlock;