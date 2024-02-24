import React, {useContext} from 'react';
import ReservationFilter from './ReservationFilter';
import CarReservationCard from './CarReservationCard';
import Plates from '../AutoPanel/Plates';
import { useEffect, useState } from 'react';
import { useFilterContext } from '../../Contexts/FilterContext';
import TrolleyIcon from '../../Layouts/UI/TrolleyIcon';
import { ReservedCarsContext } from '../../Contexts/ReservedCarsContext';
import { Container, TrolleyIconText, TrolleyIconContainer,TrolleyIconWrapper, FilterSection, ContentSection, ReservationSearchShadow, PhoneNumberReservation, ErrorMessage } from '../../Assets/Styles/CarsReservationPanel/CarsReservationPanel.styles';
import { useTranslation } from 'react-i18next';

function CarsReservationPanel({ pickupDate, returnDate }) {

  const {t} = useTranslation()

  const { reservedCars } = useContext(ReservedCarsContext);
  const {filters} = useFilterContext()
  const [showPlates, setShowPlates] = useState(window.innerWidth >= 992);
  const [showMessage, setShowMessage] = useState(false);

  const direction = showPlates ? 'row' : 'column';
  const width = showPlates ? '30%' : '100%';

const { handleFilterChange, highlighted } = useFilterContext();

const handleCarTypeChange = (type) => {
  handleFilterChange('type', type, !filters.type.includes(type));
};

    
    const handleIconClick = () => {
        if (reservedCars.length === 0) {
            setShowMessage(true);
        } else {
            window.location.href = "/summary"; 
        }
    };

    useEffect(() => {
      if (reservedCars.length > 0) {
          setShowMessage(false);
      }
  }, [reservedCars]);
  
  useEffect(() => {
    const handleResize = () => {
      setShowPlates(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container direction={direction}>
      <FilterSection width={width}>
        {!showPlates && <PhoneNumberReservation />}
        <ReservationSearchShadow showLanguage={false} />
        <ReservationFilter carTypeFilter={filters.type} onCarTypeChange={handleCarTypeChange} />
      </FilterSection>
      <ContentSection width={showPlates ? '70%' : '100%'}>
        {showPlates && <Plates carTypeFilter={highlighted} onSelect={handleCarTypeChange} />}
        <TrolleyIconWrapper>
        <TrolleyIconContainer onClick={handleIconClick}>
          <TrolleyIcon/>
          <TrolleyIconText>{t('yourBasket', { count: reservedCars.length })}</TrolleyIconText>
        </TrolleyIconContainer>
        </TrolleyIconWrapper>
        {showMessage && <ErrorMessage>{t('noCarsAdded')}</ErrorMessage>}
        <CarReservationCard carTypeFilter={filters.type} />
      </ContentSection>
    </Container>
  );
  }

export default CarsReservationPanel;