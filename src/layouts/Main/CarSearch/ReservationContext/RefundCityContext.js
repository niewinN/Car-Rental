import React, { createContext, useContext, useState } from 'react';

const RefundCityContext = createContext();



const setRefundCityWithExpiry = (cityObject, ttl = 86400000) => {
    const now = new Date();
    const item = {
        value: cityObject.value,
        label: cityObject.label,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem('selectedRefundCity', JSON.stringify(item));
}

const getRefundCityWithExpiry = () => {
    const itemStr = localStorage.getItem('selectedRefundCity');
    if (!itemStr) {
        return {
            value: '1', 
            label: ""
        };
    }
    const item = JSON.parse(itemStr);
    console.log("Wczytane z localStorage:", itemStr);

    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem('selectedRefundCity');
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

export const RefundCityProvider = ({ children }) => {
    const [selectedRefundCity, setSelectedRefundCity] = useState(getRefundCityWithExpiry);

    const setCity = (cityObject) => {
        console.log("Ustawianie selectedRefundCity w stanie:", cityObject);
        setSelectedRefundCity(cityObject);
        setRefundCityWithExpiry(cityObject);
    };

    return (
        <RefundCityContext.Provider value={{ selectedRefundCity, setCity }}>
            {children}
        </RefundCityContext.Provider>
    );
};
export const useRefundCity = () => useContext(RefundCityContext);

export default RefundCityContext;
