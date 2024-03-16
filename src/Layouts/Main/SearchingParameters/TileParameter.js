import React, { useEffect, useState } from "react"
import Plate from "../../../components/Plate"
import { StyledTileParameter, StyledLine } from "./Parameters.style"
import { useTranslation } from "react-i18next"
import { useFilterContext } from "../../../contexts/FilterContext"

const TileParameter = () => {
	const { t } = useTranslation()
	const { highlighted, setHighlighted, handleFilterChange } = useFilterContext()
	const [carTypes, setCarTypes] = useState([])

	// Aktualizacja typów samochodów w stanie komponentu, aby odpowiadały aktualnie wybranemu językowi
	useEffect(() => {
		setCarTypes([
			{
				image: require("../../../assets/Images/CarsTypes/car2.png"),
				description: t("filterParameters.personal"),
				option: "Osobowe",
				category: "type",
			},
			{
				image: require("../../../assets/Images/CarsTypes/van2.png"),
				description: t("filterParameters.bus"),
				option: "VAN",
				category: "type",
			},
			{
				image: require("../../../assets/Images/CarsTypes/delivery2.png"),
				description: t("filterParameters.delivery"),
				option: "Dostawcze",
				category: "type",
			},
			{
				image: require("../../../assets/Images/CarsTypes/taxi2.png"),
				description: t("filterParameters.taxi"),
				option: "Taxi",
				category: "type",
			},
			{
				image: require("../../../assets/Images/Categories/manual.png"),
				description: t("filterParameters.manual"),
				option: "Manualna",
				category: "gearbox",
			},
			{
				image: require("../../../assets/Images/Categories/wheel.png"),
				description: t("filterParameters.auto"),
				option: "Automatyczna",
				category: "gearbox",
			},
			{
				image: require("../../../assets/Images/Categories/shortterm.png"),
				description: t("filterParameters.short"),
				option: "Krótkoterminowy",
				category: "rent",
			},
			{
				image: require("../../../assets/Images/Categories/longterm.png"),
				description: t("filterParameters.long"),
				option: "Długoterminowy",
				category: "rent",
			},
		])
	}, [t]) // Reakcja na zmianę języka

	const [carTypeFilter, setCarTypeFilter] = useState([])

	const handlePlateClick = carType => {
		const isChecked = !highlighted.includes(carType.option)
		setHighlighted(prev => {
			if (isChecked) {
				return [...prev, carType.option]
			} else {
				return prev.filter(item => item !== carType.option)
			}
		})
		handleFilterChange(carType.category, carType.option, isChecked)
	}

	return (
		<StyledTileParameter>
			{carTypes.map((carType, index) => (
				<React.Fragment key={index}>
					<Plate
						carTypes={carType}
						highlighted={highlighted.includes(carType.option)}
						onSelect={handlePlateClick}
						enabled={true}
					/>
					{index % 2 === 1 && index !== carTypes.length - 1 && <StyledLine />}
				</React.Fragment>
			))}
		</StyledTileParameter>
	)
}

export default TileParameter
