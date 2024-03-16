import React, { useState } from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
// import { FilterContext } from '../../contexts/FilterContext';
import {
	Panel,
	ToggleButton,
	Options,
	Category,
	CategoryTitle,
	Label,
	Checkbox,
	ArrowIcon,
} from "../../assets/Styles/CarsReservationPanel/ReservationFilter.styles"
import { FilterContext, useFilterContext } from "../../contexts/FilterContext"

const ReservationFilter = ({
	setCarTypeFilter,
	carTypeFilter,
	onCarTypeChange,
}) => {
	const { t } = useTranslation()
	const { filters, handleFilterChange } = useFilterContext()

	const handleCheckboxChange = type => {
		onCarTypeChange(type)
	}

	const [expanded, setExpanded] = useState(true)

	const togglePanel = () => {
		setExpanded(!expanded)
	}

	const categories = [
		{
			key: "type",
			title: t("type"),
			options: [
				t("carTypes.sedan"),
				t("carTypes.van"),
				t("carTypes.delivery"),
				t("carTypes.taxi"),
			],
		},
		{
			key: "gearbox",
			title: t("gearbox"),
			options: [t("gearboxTypes.manual"), t("gearboxTypes.automatic")],
		},
		{
			key: "rent",
			title: t("rent"),
			options: [t("rentDuration.shortTerm"), t("rentDuration.longTerm")],
		},
		{
			key: "fuel",
			title: t("fuel"),
			options: [
				t("fuelTypes.gasoline"),
				t("fuelTypes.diesel"),
				t("fuelTypes.lpg"),
				t("fuelTypes.gasolineLpg"),
			],
		},
		{
			key: "services",
			title: t("services"),
			options: [
				t("serviceOptions.towHitch"),
				t("serviceOptions.childSeat"),
				t("serviceOptions.babySeat"),
				t("serviceOptions.gps"),
				t("serviceOptions.extraDriver"),
				t("serviceOptions.carCharger"),
				t("serviceOptions.phoneHolder"),
				t("serviceOptions.differentLocation"),
			],
		},
	]

	return (
		<Panel>
			<ToggleButton onClick={togglePanel} $isExpanded={expanded}>
				{t("reservationCriteria")}{" "}
				<ArrowIcon $isExpanded={expanded} icon={faArrowUp} />
			</ToggleButton>
			<Options $isExpanded={expanded}>
				{categories.map((category, index) => (
					<Category key={index}>
						<CategoryTitle>{category.title}</CategoryTitle>
						{category.options.map((option, optionIndex) => (
							<Label key={optionIndex}>
								<Checkbox
									checked={
										category.key &&
										filters[category.key] &&
										filters[category.key].includes(option)
									}
									onChange={e =>
										handleFilterChange(category.key, option, e.target.checked)
									}
								/>{" "}
								{option}
							</Label>
						))}
					</Category>
				))}
			</Options>
		</Panel>
	)
}

export default ReservationFilter
