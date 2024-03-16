import Plate from "../Plate"
import styled from "styled-components"
import React from "react"
import { useTranslation } from "react-i18next"

function Plates({ carTypeFilter = [], onSelect }) {
	const { t } = useTranslation()

	const carTypes = [
		{
			image: require("../../assets/Images/CarsTypes/car2.png"),
			description: t("carTypes.sedan"),
		},
		{
			image: require("../../assets/Images/CarsTypes/van2.png"),
			description: t("carTypes.van"),
		},
		{
			image: require("../../assets/Images/CarsTypes/delivery2.png"),
			description: t("carTypes.delivery"),
		},
		{
			image: require("../../assets/Images/CarsTypes/taxi2.png"),
			description: t("carTypes.taxi"),
		},
	]
	return (
		<PlatesWrapper>
			{carTypes.map(carType => (
				<Plate
					key={carType.description}
					carTypes={carType}
					highlighted={carTypeFilter.includes(carType.description)}
					onSelect={() => onSelect(carType.description)}
				/>
			))}
		</PlatesWrapper>
	)
}

export default Plates

const PlatesWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	margin-top: 20px;
	@media (max-width: 710px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 992px) {
		width: 100%;
		max-width: 1020px;
	}
`
