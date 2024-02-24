import React, { useState, useContext, useEffect } from 'react';
import { StyledFilterParameter } from "./Parameters.style";
import { useTranslation } from 'react-i18next';
import { useFilterContext } from '../../../Contexts/FilterContext';
import { Options, Category, CategoryTitle, Label, Checkbox } from './Parameters.style';

const FilterParameter = () => {
    const { filters, handleFilterChange, setOptionsForCategory  } = useFilterContext();

    // useEffect(() => {
    //     console.log('Aktualne filtry:', filters);
    // }, [filters]);

    const categories = [
      { key: 'type', title: 'Typ pojazdu', options: ['Osobowe', 'VAN', 'Dostawcze', 'Taxi'] },
      { key: 'gearbox', title: 'Skrzynia biegów', options: ['Manualna', 'Automatyczna'] },
      { key: 'rent', title: 'Wynajem', options: ['Krótkoterminowy', 'Długoterminowy'] },
      
    //   { key: 'fuel', title: 'Rodzaj paliwa', options: ['Benzyna', 'Diesel', 'LPG', 'Benzyna + LPG'] },
    ];
    
    // useEffect(() => {
    //     categories.forEach((category) => {
    //       setOptionsForCategory(category.key, category.options);
    //     });
    //   }, [setOptionsForCategory]);

    return (
        <StyledFilterParameter>
        <Options $isExpanded={true}>
            {categories.map((category, index) => (
                <Category key={index}>
                    <CategoryTitle>{category.title}</CategoryTitle>
                        {category.options.map((option, optionIndex) => (
                        <Label key={optionIndex}>
                            <Checkbox 
                            checked={category.key && filters[category.key] && filters[category.key].includes(option)} 
                            onChange={(e) => handleFilterChange(category.key, option, e.target.checked)}
                            /> {option}
                        </Label>
                    ))}
                 </Category>
                ))}
        </Options>
        </StyledFilterParameter>
    );
}

export default FilterParameter;