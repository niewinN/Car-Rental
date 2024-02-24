import React, { useState } from 'react';
import { StyledDate } from './ReservationSearch.styles';
import { useTranslation } from 'react-i18next';
import { useDateContext } from '../../../../../Contexts/DateContext';
import moment from 'moment';

const Date = ({ useDate, onClick, selectedDate, onDateChange }) => {
  const { t } = useTranslation();

  const handleDateClick = () => {
    onClick(useDate);
    if (useDate === 0 && selectedPickupState) {
      onDateChange(moment(selectedPickupState).format('DD-MM-YYYY'));
    } else if (useDate === 1 && selectedReturnState) {
      onDateChange(moment(selectedReturnState).format('DD-MM-YYYY'));
    }
  };
  /* eslint-disable */
  const [currentDate, setCurrentDate] = useState(useDate);

  const {
    selectedPickupState,
    selectedReturnState,
  } = useDateContext()

  const content = () => {
    if (currentDate === 0) {
      return (
        <div className="date" onClick={() => onClick(useDate)}>
          <div className="pick-up">
            <p>{t('Date.pick')}</p>
            <p>{selectedPickupState ? selectedPickupState.format('DD-MM-YYYY') : '-- -- ----'}</p>
        </div>
        <div className="line"></div>
        <p>{selectedPickupState ? selectedPickupState.format('HH:mm') : '--:--'}</p>
      </div>
      );
    } else if (currentDate === 1) {
      return (
        <div className="date" onClick={() => onClick(useDate)}>
        <div className="pick-up">
        <p>{t('Date.refund')}</p>
          <p>{selectedReturnState ? selectedReturnState.format('DD-MM-YYYY') : '-- -- ----'}</p>
        </div>
        <div className="line"></div>
        <p>{selectedReturnState ? selectedReturnState.format('HH:mm') : '--:--'}</p>
      </div>
      );
    }
  };

  return (
    <StyledDate onClick={handleDateClick}>
      {content()}
    </StyledDate>
  );
};

export default Date;