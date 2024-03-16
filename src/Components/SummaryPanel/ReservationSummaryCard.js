import React, { useContext } from "react"
import {
	HeaderDivSummary,
	FeaturesDivSummary,
	ReservationSummaryCardContainer,
	SummaryCardContainer,
	CloseButton,
	SummarySection,
	SummaryItem,
	SummaryTitle,
	ItemHeader,
	ItemValue,
} from "../../assets/Styles/SummaryPanel/ReservationSummaryCard.styles"
import {
	CarImage,
	CarName,
	Feature,
	Icon,
} from "../../assets/Styles/CarsReservationPanel/CarReservationCard.styles"
import { useTranslation } from "react-i18next"
import { ReservedCarsContext } from "../../contexts/ReservedCarsContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function ReservationSummaryCard() {
	const { t } = useTranslation()
	const { reservedCars, removeCar } = useContext(ReservedCarsContext)

	return (
		<ReservationSummaryCardContainer>
			{reservedCars.map((car, index) => (
				<SummaryCardContainer key={index}>
					<CloseButton onClick={() => removeCar(index)}>
						<FontAwesomeIcon icon={faTimes} />
					</CloseButton>
					<HeaderDivSummary>
						<CarImage src={car.image} alt={car.carName} />
						<CarName>{car.carName}</CarName>
					</HeaderDivSummary>
					<FeaturesDivSummary>
						{car.features.map((feature, featureIndex) => (
							<Feature key={featureIndex}>
								<Icon src={feature.icon} alt={feature.name} />
								{t(`carFeatures.${feature.name}`)}
							</Feature>
						))}
					</FeaturesDivSummary>
					<SummarySection>
						<SummaryTitle>{t("reservationSummary.summary")}</SummaryTitle>
						<SummaryItem>
							<ItemHeader>{t("reservationSummary.pick-up")}</ItemHeader>
							<ItemValue>{car.pickupDate}</ItemValue>
						</SummaryItem>
						<SummaryItem>
							<ItemHeader>{t("reservationSummary.pick-up-place")}</ItemHeader>
							<ItemValue>{car.pickupCity}</ItemValue>
						</SummaryItem>
						<SummaryItem>
							<ItemHeader>{t("reservationSummary.refund")}</ItemHeader>
							<ItemValue>{car.returnDate}</ItemValue>
						</SummaryItem>
						<SummaryItem>
							<ItemHeader>{t("reservationSummary.refund-place")}</ItemHeader>
							<ItemValue>{car.returnCity}</ItemValue>
						</SummaryItem>
					</SummarySection>
				</SummaryCardContainer>
			))}
		</ReservationSummaryCardContainer>
	)
}

export default ReservationSummaryCard
