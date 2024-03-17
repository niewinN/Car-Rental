import React, { createContext, useContext, useState } from 'react';

const RefundContext = createContext();

export const useRefundContext = () => {
  return useContext(RefundContext);
};

export const RefundProvider = ({ children }) => {
    const [clickedOne, setClickedOne] = useState(false);
    const [clickedTwo, setClickedTwo] = useState(false);

  return (
    <RefundContext.Provider value={{ clickedOne, setClickedOne, clickedTwo, setClickedTwo }}>
      {children}
    </RefundContext.Provider>
  );
};


export default RefundContext;