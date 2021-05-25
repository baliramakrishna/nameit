import React from 'react';
import NameBox from './../NameBox/NameBox'
import './ResultsContainer.css';

const ResultsContainer = ({suggestedNames}) =>{

    const suggestedNameCards = suggestedNames.map((suggestedName) => 
     <NameBox suggestedName={suggestedName} />
    );

    return(<div className="results-container">{suggestedNameCards}</div>)
};

export  default ResultsContainer;