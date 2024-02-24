import { useContext, useState } from 'react';
import { useDateContext } from '../../../Contexts/DateContext';
import { toast } from 'react-toastify';
import SelectCityContext from '../../../Layouts/Main/CarSearch/ReservationContext/SelectCityContext';
import { ReservedCarsContext } from '../../../Contexts/ReservedCarsContext';
import RefundContext from '../../../Contexts/RefundContext';
import RefundCityContext from '../../../Layouts/Main/CarSearch/ReservationContext/RefundCityContext';
import { useTranslation } from 'react-i18next';

export const useHandleReserve = () => {
  const { t } = useTranslation();
  const { selectedPickupState, selectedReturnState } = useDateContext();
  const {selectedCity} = useContext(SelectCityContext);
  const [lastToastShown, setLastToastShown] = useState(null);
  const {clickedOne} = useContext(RefundContext);
  const {selectedRefundCity} = useContext(RefundCityContext);
  const { reservedCars, addCarToReservation, removeCar, isCarReserved } = useContext(ReservedCarsContext);

  const handleReserve = (car) => {
    const currentTime = new Date().getTime();
    const isRefundCitySelected = clickedOne ? (selectedRefundCity && selectedRefundCity.value !== '1') : true;

    if (!selectedPickupState || !selectedReturnState || selectedCity.value !== '2' || !isRefundCitySelected) {
        if (!lastToastShown || currentTime - lastToastShown > 5000) {
            toast.error(t('toastReserveError'));
            setLastToastShown(currentTime);
        }
        return false;
    }

    if (isCarReserved(car.id)) {
        const index = reservedCars.findIndex((reservedCar) => reservedCar.id === car.id);
        if (index > -1) removeCar(index);
    } else {
        addCarToReservation(car, selectedPickupState.format('YYYY-MM-DD HH:mm'), selectedReturnState.format('YYYY-MM-DD HH:mm'), selectedCity);
    }
    return true;
  };

  return handleReserve;
};
