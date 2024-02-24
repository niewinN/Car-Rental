import React from 'react'
import CarsReservationPanel from '../Components/CarsReservationPanel/CarsReservationPanel'
import HeaderBottom from '../Layouts/UI/HeaderBottom'
import TrolleyIcon from '../Layouts/UI/TrolleyIcon'

function Reservation() {
  return (
    <>
    <HeaderBottom>
      <TrolleyIcon/>
    </HeaderBottom>
    <CarsReservationPanel/>
    </>
  )
}

export default Reservation