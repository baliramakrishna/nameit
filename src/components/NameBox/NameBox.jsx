import React from 'react';
import './NameBox.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameBox = ({suggestedName})=>{

    return(<a
        target="_blank"
        href={`${nameCheapUrl}${suggestedName}`}
        rel="noreferrer"
        className="result-name-link"
    >
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
    </a>)
};

export default NameBox;