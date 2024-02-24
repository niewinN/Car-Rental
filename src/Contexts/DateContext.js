import React, { createContext, useContext, useState } from 'react';
import moment from 'moment';


const DateContext = createContext();

const setDateWithExpiry = (key, date, ttl = 86400000) => {
  const now = new Date();
  const item = {
    value: date.toISOString(),
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export const getDateWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  
  if (!itemStr) {
    return null;
  }

  try {
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return moment(new Date(item.value)).locale('pl');
  } catch (error) {
    console.error("Błąd podczas parsowania wartości z localStorage:", error);
    localStorage.removeItem(key);
    return null;
  }
}

export const DateProvider = ({ children }) => {
  const [selectedPickupState, setSelectedPickupState] = useState(getDateWithExpiry("pickupDate"));
  const [selectedReturnState, setSelectedReturnState] = useState(getDateWithExpiry("returnDate"));

  return (
    <DateContext.Provider value={{
      selectedPickupState,
      selectedReturnState,
      setSelectedPickupState,
      setSelectedReturnState,
      setDateWithExpiry,
    }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);

