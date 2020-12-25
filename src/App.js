import React from 'react'
import Markdown from './Markdown/Markdown';
import './App.css'

const App = () => {

  const mdWidth = 'md-width'

  const markdown = `
~~~js
const embedAnExpresion = (exp) => \`Wook at this \${exp}\`;
~~~
`
  return (
    <Markdown markdown={markdown} mdClassName={mdWidth} />
  );
};

export default App;

