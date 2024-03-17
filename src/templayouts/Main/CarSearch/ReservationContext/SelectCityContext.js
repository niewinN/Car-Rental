import React, { createContext, useContext, useState } from 'react';

const SelectCityContext = createContext();

const setCityWithExpiry = (cityObject, ttl = 86400000) => {
  const now = new Date();
  const item = {
    value: cityObject.value,
    label: cityObject.label,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem('selectedCity', JSON.stringify(item));
}

const getCityWithExpiry = () => {
  const itemStr = localStorage.getItem('selectedCity');
  if (!itemStr) {
    return { 
      value: '1', 
      label: ""
    }; 
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('selectedCity');
    return { 
      value: '1', 
      label: ""
    }; 
  }
  return {
    value: item.value,
    label: item.label
  };
}


export const SelectCityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState(getCityWithExpiry);

    const setCity = (cityObject) => {
      setSelectedCity(cityObject);
      setCityWithExpiry(cityObject);
  };
  

    return (
        <SelectCityContext.Provider value={{ selectedCity, setCity }}>
            {children}
        </SelectCityContext.Provider>
    );
};

export const useSelectCity = () => useContext(SelectCityContext);

export default SelectCityContext;

