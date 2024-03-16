import React from "react"
import CarsReservationPanel from "../components/CarsReservationPanel/CarsReservationPanel"
import HeaderBottom from "../layouts/UI/HeaderBottom"
import TrolleyIcon from "../layouts/UI/TrolleyIcon"

function Reservation() {
	return (
		<>
			<HeaderBottom>
				<TrolleyIcon />
			</HeaderBottom>
			<CarsReservationPanel />
		</>
	)
}

export default Reservation
