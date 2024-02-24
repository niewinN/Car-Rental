import { createContext, useState, useEffect, useContext } from 'react';
import RefundCityContext from '../Layouts/Main/CarSearch/ReservationContext/RefundCityContext';
import RefundContext from '../Contexts/RefundContext'

export const ReservedCarsContext = createContext();

export const ReservedCarsProvider = ({ children }) => {

  const [shouldRedirectAndRefresh, setShouldRedirectAndRefresh] = useState(false);

    const [reservedCars, setReservedCars] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem('reservedCars') || "{}");
        const reservedCarsTime = 24 * 60 * 60 * 1000;
    
        if (storedData.timestamp && (Date.now() - storedData.timestamp) <= reservedCarsTime) {
          return storedData.cars;
        } else {
          localStorage.removeItem('reservedCars');
          return [];
        }
      });
    
      useEffect(() => {
        const dataToStore = {
          timestamp: Date.now(),
          cars: reservedCars
        };
    
        localStorage.setItem('reservedCars', JSON.stringify(dataToStore));
      }, [reservedCars]);

    useEffect(() => {
      const reservedCarsTime = 24 * 60 * 60 * 1000;
  
      const timer = setTimeout(() => {
          setShouldRedirectAndRefresh(true);
      }, reservedCarsTime);
  
      return () => {
          clearTimeout(timer);
      };
  }, [reservedCars]);

  useEffect(() => {
    if (shouldRedirectAndRefresh && window.location.pathname === '/summary') {
        window.location.href = '/reservation';
    }
}, [shouldRedirectAndRefresh]);

      const {selectedRefundCity} = useContext(RefundCityContext)
      const { clickedOne } = useContext(RefundContext)

  
      const addCarToReservation = (car, pickupDate, returnDate, city) => {
        
        let chosenReturnCity;

    if (clickedOne) {
        chosenReturnCity = selectedRefundCity && selectedRefundCity.value !== '1' ? selectedRefundCity : city;
    } else {
        chosenReturnCity = city;
    }

    const carToReserve = {
        ...car,
        pickupDate: pickupDate,
        returnDate: returnDate,
        pickupCity: city.label,
        returnCity: chosenReturnCity.label
    };
        setReservedCars(prevCars => [...prevCars, carToReserve]);
      };
    
      const removeCar = (indexToRemove) => {
        setReservedCars(prevCars => prevCars.filter((_, index) => index !== indexToRemove));
      }

      const isCarReserved = (carId) => {
        return reservedCars.some(reservedCar => reservedCar.id === carId);
      };


  return (
    <ReservedCarsContext.Provider value={{ reservedCars, addCarToReservation, removeCar, isCarReserved }}>
      {children}
    </ReservedCarsContext.Provider>
  );
};
