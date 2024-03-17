import React from 'react';
import { StyledCity } from './ReservationSearch.styles';
import { useSelectCity } from '../../ReservationContext/SelectCityContext';
import { useTranslation } from 'react-i18next';
import {useRefundCity} from '../../ReservationContext/RefundCityContext'

function SelectCity({type, options = [] }) {
  
  const { t } = useTranslation();
  const pickupContext = useSelectCity();
  const refundContext = useRefundCity();

  let context;
  let selectedCityName;
  if (type === 'pickup') {
    context = pickupContext;
    selectedCityName = "selectedCity";
  } else if (type === 'refund') {
    context = refundContext;
    selectedCityName = "selectedRefundCity";
  } else {
    console.error("Nieprawidłowy typ kontekstu:", type);
    return null;
  }

  const selectedCity = context[selectedCityName];
  const setCity = context.setCity;

  const handleCityChange = (e) => {
      const selectedIndex = e.target.selectedIndex;
      const selectedOptionText = e.target.options[selectedIndex].text;
      const selectedOptionValue = e.target.value;
      
      const cityObject = {
        value: selectedOptionValue,
        label: selectedOptionText
      };
    
      setCity(cityObject);
      localStorage.setItem(`${type}City`, JSON.stringify(cityObject));
  };

  return (
    <StyledCity value={selectedCity?.value} onChange={handleCityChange}>
        {options.map(opt => <option key={opt.value} value={opt.value}>{t(opt.label)}</option>)}
    </StyledCity>
  );
}

export default SelectCity;