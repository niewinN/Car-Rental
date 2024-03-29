import React, { useState, useEffect, useContext } from "react"
import AutoCard from "../components/AutoPanel/AutoCard"
import Plates from "../components/AutoPanel/Plates"
import styled from "styled-components"
import { FilterContext } from "../contexts/FilterContext"
import { ErrorMessageType } from "../assets/Styles/CarsReservationPanel/CarReservationCard.styles"
import { useTranslation } from "react-i18next"
import FleetTop from "../components/AutoPanel/FleetTop"

function Fleet() {
	const { t } = useTranslation()
	const [carTypeFilter, setCarTypeFilter] = useState([])
	const [showNoCarMessage, setShowNoCarMessage] = useState(false)

	const image = require("../assets/Images/auto.png")
	const carimage2 = require("../assets/Images/Ford_Focus2.png")

	const cars = [
		{ id: 1, image: image, name: "Toyota Corolla", type: "Osobowe" },
		{ id: 2, image: carimage2, name: "Ford Focus", type: "VAN" },
		{ id: 3, image: image, name: "Toyota Prius", type: "Taxi" },
		{ id: 4, image: image, name: "Lamborghini", type: "Osobowe" },
		{ id: 5, image: carimage2, name: "Polonez", type: "VAN" },
		{ id: 6, image: image, name: "Opel Astra", type: "Osobowe" },
		{ id: 7, image: carimage2, name: "Ford Focus", type: "VAN" },
	]

	const filteredCars =
		carTypeFilter.length === 0
			? cars
			: cars.filter(car => carTypeFilter.includes(car.type))

	const { filters } = useContext(FilterContext)

	const handlePlateClick = type => {
		const updatedFilter = carTypeFilter.includes(type)
			? carTypeFilter.filter(item => item !== type)
			: [...carTypeFilter, type]
		const carsAfterFilter = cars.filter(car => updatedFilter.includes(car.type))

		setShowNoCarMessage(carsAfterFilter.length === 0)
		setCarTypeFilter(updatedFilter)
	}

	useEffect(() => {
		if (filters.type) {
			setCarTypeFilter(filters.type)
		}
	}, [filters])

	const [currentPage, setCurrentPage] = useState(1)
	const [showAllItems, setShowAllItems] = useState(false)
	const [itemsPerPage, setItemsPerPage] = useState(5)

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem)

	return (
		<FlotaWrapper>
			<FleetTop />
			<Plates carTypeFilter={carTypeFilter} onSelect={handlePlateClick} />
			{showNoCarMessage && carTypeFilter.length > 0 && (
				<ErrorMessageFleet>{t("errorFleet")}</ErrorMessageFleet>
			)}
			{showAllItems
				? filteredCars.map(car => (
						<AutoCard
							key={car.id}
							carImage={car.image}
							carName={car.name}
							type={car.type}
						/>
				  ))
				: currentItems.map(car => (
						<AutoCard
							key={car.id}
							carImage={car.image}
							carName={car.name}
							type={car.type}
						/>
				  ))}
		</FlotaWrapper>
	)
}

export default Fleet

const FlotaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`

const ErrorMessageFleet = styled(ErrorMessageType)`
	margin-top: 30px;
	width: 90%;
	max-width: 1000px;
`
