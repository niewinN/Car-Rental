import React, { createContext, useContext, useState } from 'react';

export const UserDataContext = createContext();

export const useUserData = () => {
    return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}
