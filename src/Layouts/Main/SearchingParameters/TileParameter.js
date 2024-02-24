import React, { useState, useEffect, useContext } from 'react';
import Plate from '../../../Components/Plate';
import { StyledTileParameter, StyledLine } from './Parameters.style';
import { useTranslation } from 'react-i18next';
import { useFilterContext } from '../../../Contexts/FilterContext'

const TileParameter = () => {
    const { t } = useTranslation();
    const { highlighted, setHighlighted, handleFilterChange } = useFilterContext();
    const [carTypes, setCarTypes] = useState([
        { image: require('../../../Assets/Images/CarsTypes/car2.png'), description: t('filterParameters.personal'), option: 'Osobowe', category: 'type' },
        { image: require('../../../Assets/Images/CarsTypes/van2.png'), description: t('filterParameters.bus'), option: 'VAN', category: 'type' },
        { image: require('../../../Assets/Images/CarsTypes/delivery2.png'), description: t('filterParameters.delivery'), option: 'Dostawcze', category: 'type' },
        { image: require('../../../Assets/Images/CarsTypes/taxi2.png'), description: t('filterParameters.taxi'), option: 'Taxi', category: 'type' },
        { image: require('../../../Assets/Images/Categories/manual.png'), description: t('filterParameters.manual'), option: 'Manualna', category: 'gearbox' },
        { image: require('../../../Assets/Images/Categories/wheel.png'), description: t('filterParameters.auto'), option: 'Automatyczna', category: 'gearbox' },
        { image: require('../../../Assets/Images/Categories/shortterm.png'), description: t('filterParameters.short'), option: 'Krótkoterminowy', category: 'rent' },
        { image: require('../../../Assets/Images/Categories/longterm.png'), description: t('filterParameters.long'), option: 'Długoterminowy', category: 'rent' },
    ]);

    const [carTypeFilter, setCarTypeFilter] = useState([]);

    // const handlePlateClick = (type) => {
    //     setCarTypes((prevCarTypes) => {
    //         const updatedCarTypes = prevCarTypes.map((carType) => {
    //             if (carType.description === type) {
    //                 return { ...carType, highlighted: !carType.highlighted };
    //                 setHighlighted(carType.highlighted)
    //             }
    //             return carType;
    //         });
    //         return updatedCarTypes;
    //     });
    // };

    // const handlePlateClick = (type) => {
    //     // Logika do odwracania stanu podświetlenia dla `Plate`
    //     setHighlighted(prev => {
    //       if (prev.includes(type.option)) {
    //         return prev.filter(item => item !== type.option);
    //       } else {
    //         return [...prev, type.option];
    //       }
    //     });
        
    //     // Aktualizacja stanu checkboxa w komponencie `FilterParameter`
    //     // handleFilterChange('type', type.option, !highlighted.includes(type.option));
    //     const isChecked = !highlighted.includes(type.option);
    //     handleFilterChange(type.category, type.option, isChecked);
    // };

    const handlePlateClick = (carType) => {
        const isChecked = !highlighted.includes(carType.option);
        setHighlighted(prev => {
          if (isChecked) {
            return [...prev, carType.option];
          } else {
            return prev.filter(item => item !== carType.option);
          }
        });
        handleFilterChange(carType.category, carType.option, isChecked);
    };
    
    


    return (
        <StyledTileParameter>
            {carTypes.map((carType, index) => (
                <React.Fragment key={index}>
                    <Plate
                        carTypes={carType}
                        highlighted={highlighted.includes(carType.option)}
                        onSelect={handlePlateClick}
                        enabled={true}
                    />
                    {(index % 2 === 1 && index !== carTypes.length - 1) && <StyledLine />}
                </React.Fragment>
            ))}
        </StyledTileParameter>
    );
};

export default TileParameter;