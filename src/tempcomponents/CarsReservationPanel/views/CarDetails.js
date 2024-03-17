import {
	CarImage,
	HeaderDiv,
	CarName,
} from "../../../assets/Styles/CarsReservationPanel/CarReservationCard.styles"

const CarDetails = ({ car }) => {
	return (
		<HeaderDiv>
			<CarImage src={car.image} alt={car.carName} />
			<CarName>{car.carName}</CarName>
		</HeaderDiv>
	)
}

export default CarDetails
