import { useContext } from 'react';
import { FilterContext } from '../../../Contexts/FilterContext';
import { useDateContext } from '../../../Contexts/DateContext';

export const useCarFilter = (carData, carTypeFilter) => {
  const { selectedPickupState, selectedReturnState } = useDateContext();
  const { filters } = useContext(FilterContext);

  return carData.filter(car => {
    let isAvailable = true;
    if (selectedPickupState && selectedReturnState) {
      isAvailable = car.availability.some(range => {
        return selectedPickupState.isSameOrAfter(range.from) && selectedReturnState.isSameOrBefore(range.to);
      });
    } else {
      isAvailable = true;
    }

    let matchesTypeFromParent = carTypeFilter.length === 0 || carTypeFilter.includes(car.type);
    let matchesType = filters.type.length === 0 || filters.type.includes(car.type);
    let matchesFuel = filters.fuel.length === 0 || car.features.some(feature => filters.fuel.includes(feature.name));
    let matchesGearbox = filters.gearbox.length === 0 || car.features.some(feature => filters.gearbox.includes(feature.name));
    let matchesHook = filters.services && filters.services.includes('Hak holowniczy') ? car.hook : true;

    return isAvailable && matchesTypeFromParent && matchesType && matchesFuel && matchesGearbox && matchesHook;
  });
};

export default useCarFilter;
