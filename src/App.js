import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './App.css'

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={tomorrow} language={language} children={value} />
  }
}

const cN = 'md-width'

const markdown = `Here is some JavaScript code:

~~~js
import React, { Fragment, useState, useEffect, useRef } from 'react';
import CuisineOptions from './CuisineOptions';
import Recipes from './Recipes';
import NetworkErr from '../Errors/NetworkErr';
import LoadingSpinner from '../LoadingSpinner/Loading';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [networkError, setNetworkError] = useState({
        bool: false,
        message: ''
    });
    const [cuisine, setCuisine] = useState('American');
    const isMounted = useRef(false);

    useEffect(() => {
        fetchRecipes();
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            fetchCuisine();
        } else {
            isMounted.current = true;
        };
    }, [cuisine]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch(\`https://api.spoonacular.com/recipes/complexSearch/?cuisine=American&addRecipeInformation=true&apiKey=\${process.env.REACT_APP_SPOONACULAR_API_KEY}\`)
            if (response.ok === true && response.status === 200) {
                setIsLoaded(true);
                const toJson = await response.json();
                console.warn(toJson);
                setRecipes(toJson.results);
            };
            if (response.ok === false && response.status === 402) {
                setIsLoaded(true);
                throw new Error('Too many requests. Only 150 requests per day on the free plan.');
            };
        } catch (err) {
            console.error(err);
            setNetworkError({ bool: true, message: 'Sorry! The Spoonacular API only allows 150 requests per day on the free plan.' });
        };
    };

    const fetchCuisine = async () => {
        try {
            const response = await fetch(\`https://api.spoonacular.com/recipes/complexSearch/?cuisine=\${cuisine}&addRecipeInformation=true&apiKey=\${process.env.REACT_APP_SPOONACULAR_API_KEY}\`)
            if (response.ok === true && response.status === 200) {
                setIsLoaded(true);
                const toJson = await response.json();
                setRecipes(toJson.results);
            };
            if (response.ok === false && response.status === 402) {
                setIsLoaded(true);
                throw new Error('Too many requests. Only 150 requests per day on the free plan.');
            };
        } catch (err) {
            console.error(err);
            setNetworkError({ bool: true, message: 'Sorry! The Spoonacular API only allows 150 requests per day on the free plan.' });
        };
    };

    return (
        <Fragment>
            <CuisineOptions setCuisine={setCuisine} />
            <Recipes rec={recipes} />
            <LoadingSpinner bool={isLoaded} />
            <NetworkErr bool={networkError.bool} message={networkError.message} />
        </Fragment>
    );
};

export default Home;
~~~
`

const App = () => {
  return(
    <ReactMarkdown className={cN} language="javascript" renderers={renderers} children={markdown} />
  );
};

export default App;

