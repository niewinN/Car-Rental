import React from "react";
import { StyledLanguage } from './ReservationSearch.styles';
import { useSetLanguage } from './LanguageContext';

function Language() {
    const british = require('../../../../../Assets/Images/Language/british.png');
    const polish = require('../../../../../Assets/Images/Language/polish.jpg');

    const setLanguage = useSetLanguage();

    

    const handleLanguageChange = (language) => {
        setLanguage(language);
        console.log(`Changing language to ${language}`);

        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 24);

        localStorage.setItem('userLanguage', language);
        localStorage.setItem('userLanguageExpiration', expirationDate.toString());

        console.log(`Changing language to ${language}`);
    };

    return (
        <StyledLanguage>
            <img
                src={british}
                alt="british"
                onClick={() => handleLanguageChange("en")}
            />
            <img
                src={polish}
                alt="polish"
                onClick={() => handleLanguageChange("pl")}
            />
        </StyledLanguage>
    );
}

export default Language;