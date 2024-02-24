import React, { useState } from 'react';
import SelectCity from './ReservationSearch/SelectCity';
import Refund from './ReservationSearch/Refund';
import DatePicker from './ReservationSearch/Date';
import DatePanel from './ReservationSearch/DatePanel';
import styled from 'styled-components';
import theme from '../../../../Assets/Styles/theme';
import Languague from './ReservationSearch/Language';
import { StyledButton, StyledLink } from './ReservationSearch/ReservationSearch.styles';
import { useTranslation } from 'react-i18next';
import { useSelectCity } from '../ReservationContext/SelectCityContext';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDateWithExpiry } from '../../../../Contexts/DateContext';
import { useRefundContext } from '../../../../Contexts/RefundContext';
import { useRefundCity } from '../ReservationContext/RefundCityContext';
import Datetime from 'react-datetime';


function ReservationSearch({ showLanguage = true, onSearch = () => {}}) {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { selectedCity } = useSelectCity();
  const [showPickupDatePanel, setShowPickupDatePanel] = useState(false);
  const [showReturnDatePanel, setShowReturnDatePanel] = useState(false);
  const [pickupUseDate, setPickupUseDate] = useState(null);
  const [returnUseDate, setReturnUseDate] = useState(null);
  const [lastToastTime, setLastToastTime] = useState(null);
  const [pickupDate, setPickupDate] = useState(getDateWithExpiry("pickupDate"));
  const [returnDate, setReturnDate] = useState(getDateWithExpiry("returnDate"));
  const { clickedOne } = useRefundContext();
  const { selectedRefundCity } = useRefundCity();
  const [isOpenPanel, setIsOpenPanel] = useState(false);


  const showPickupDatePanelHandler = (useDate) => {
    setShowPickupDatePanel(!showPickupDatePanel);
    setPickupUseDate(useDate);
    setIsOpenPanel(true);
  };

  const showReturnDatePanelHandler = (useDate) => {
    setShowReturnDatePanel(!showReturnDatePanel);
    setReturnUseDate(useDate);
    setIsOpenPanel(true);
  };

  const handlePickupDateChange = (newDate) => {
    setPickupDate(newDate);
  };

    const handleReturnDateChange = (newDate) => {
        setReturnDate(newDate);
    };
  

const handleButtonClick = () => {
  const isCitySelected = selectedCity && selectedCity.value === '2';
  
  let isRefundCitySelected;
  // let effectiveReturnCity;

  if (clickedOne) {
    isRefundCitySelected = selectedRefundCity && selectedRefundCity.value === '4';
    // effectiveReturnCity = selectedRefundCity;
  } else {
    isRefundCitySelected = true;
    // effectiveReturnCity = selectedCity; 
  }

  // const pickupCity = JSON.parse(localStorage.getItem('selectedCity'));
  const pickupDate = localStorage.getItem('pickupDate');
  const returnDate = localStorage.getItem('returnDate');
  
  // console.log('pickupCity:', pickupCity);
  // console.log('effectiveReturnCity:', effectiveReturnCity);
  // console.log('pickupDate:', pickupDate);
  // console.log('returnDate:', returnDate);

  if (pickupDate && returnDate && (isCitySelected && isRefundCitySelected)) {
    onSearch();
    navigate('/reservation');
  } else {
    const now = new Date().getTime();
    if (!lastToastTime || now - lastToastTime > 5000) {
      toast.error(t('toastReserveError'));
      setLastToastTime(now);
    }
  }
  // console.log("Czy selectedCity jest poprawne?", isCitySelected);
  // console.log("Czy clickedOne jest true?", clickedOne);
  // console.log("Czy selectedRefundCity jest poprawne?", isRefundCitySelected);
};



  return (
    <StyledComponent>
      {showLanguage && <Languague />}
      {showPickupDatePanel && (
        <DatePanel
          isOpen={isOpenPanel}
          useDate={pickupUseDate}
          selectedDate={pickupDate}
          onPickupDateChange={handlePickupDateChange}
          onReturnDateChange={handleReturnDateChange}
          closeDate={() => setShowPickupDatePanel(false)}
        />
      )}
      {showReturnDatePanel && (
        <DatePanel
        isOpen={isOpenPanel}
          useDate={returnUseDate}
          selectedDate={returnDate}
          onPickupDateChange={handlePickupDateChange}
          onReturnDateChange={handleReturnDateChange}
          closeDate={() => setShowReturnDatePanel(false)}
        />
      )}
      
      {/* <SelectCity/> */}
      <SelectCity type='pickup' options={[
        {value: '1', label: 'selectCity.none'},
        {value: '2', label: 'selectCity.one'}
      ]}/>
      
      <Refund useNumber={0} />

      {clickedOne && <SelectCity type='refund' options={[
        {value: '1', label: 'selectCity.none'},
        {value: '4', label: 'selectCity.two'}
      ]}
    
      />}
      <DatePicker useDate={0} onClick={() => showPickupDatePanelHandler(0)} selectedDate={pickupDate} onDateChange={handlePickupDateChange} />
      <DatePicker useDate={1} onClick={() => showReturnDatePanelHandler(1)} selectedDate={returnDate} onDateChange={handleReturnDateChange} />

      <Refund useNumber={1} />
      <StyledButton onClick={handleButtonClick}>
        <StyledLink>
          {t('button')}
          </StyledLink>
      </StyledButton>
      <ToastContainer/>
    </StyledComponent>
  );
}

export default ReservationSearch;

export const StyledComponent = styled.div`
  
  margin: 0 20px 20px 20px;
  padding: 20px;
  /* width: 100%; */
  background-color: ${theme.colors.primary};
  border-radius: 0 0 8px 8px;

  
  @media (min-width: 992px) {
    border-radius: 8px;
  }

  @media (min-width: 768px){
      /* margin: auto; */
      /* flex-basis: 100%; */
      /* min-width: 300px; */
  }

  @media (min-width: 992px) {
    margin: 20px;
  }

  @media (min-width: 1024px) {
    /* flex-basis: 30%; */
  }
  `