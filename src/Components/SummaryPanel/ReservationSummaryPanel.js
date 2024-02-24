import React from 'react'
import ReservationSummaryCard from './ReservationSummaryCard'
import FinalPriceReservationBox from './FinalPriceReservationBox'
import { SummaryCardsTitle, ReservationSummaryCardLink } from '../../Assets/Styles/SummaryPanel/ReservationSummaryPanel.styles'
import { useTranslation } from 'react-i18next';

function ReservationSummaryPanel({ handleValidationAndSubmit, fillUserData }) {
  const { t } = useTranslation();

  return (
    <>
    <SummaryCardsTitle>{t("yourCars")}</SummaryCardsTitle>
    <ReservationSummaryCard/>
    <ReservationSummaryCardLink to='/reservation'>{t("addMoreCars")}</ReservationSummaryCardLink>
    <FinalPriceReservationBox fillUserData={fillUserData} onSubmit={handleValidationAndSubmit} showSummaryFormText={false} />
    </>
  )
}

export default ReservationSummaryPanel