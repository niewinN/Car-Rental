import React, { useContext, useState } from 'react'
import autoImg from '../../Assets/Images/auto.png'
import gearboxIcon from '../../Assets/Images/ServiceImages/gearbox.png'
import personIcon from '../../Assets/Images/ServiceImages/person2.png'
import fuelIcon from '../../Assets/Images/ServiceImages/fuel2.png'
import bootIcon from '../../Assets/Images/ServiceImages/boot2.png'
import doorIcon from '../../Assets/Images/ServiceImages/door2.png'
import {
	CardWrapper,
	CardContainer,
	ErrorMessageType,
} from '../../Assets/Styles/CarsReservationPanel/CarReservationCard.styles'
import { ReservedCarsContext } from '../../Contexts/ReservedCarsContext'
import { useTranslation } from 'react-i18next'
import SuccessModal from '../../Layouts/UI/SuccessModal'
import { useHandleReserve } from './hooks/ReserveCar'
import { useCarFilter } from './hooks/FilterCar'
import ReservationInfo from './views/ReservationInfo'
import CarDetails from './views/CarDetails'
import FeaturesAndPrice from './views/FeaturesAndPrice'

export const carData = [
	{
		id: 1,
		carName: 'Toyota Camry',
		image: autoImg,
		features: [
			{ name: 'Manualna', icon: gearboxIcon },
			{ name: '5 osobowy', icon: personIcon },
			{ name: 'Diesel', icon: fuelIcon },
			{ name: 'Bagażnik - 280L', icon: bootIcon },
			{ name: '5 drzwiowy', icon: doorIcon },
		],
		price: 250,
		hook: true,
		type: 'Osobowe',
		availability: [
			{
				from: '2024-01-01T10:00:00Z',
				to: '2024-11-29T18:00:00Z',
			},
		],
	},
	{
		id: 2,
		carName: 'Toyota Corolla',
		image: autoImg,
		features: [
			{ name: 'Automatyczna', icon: gearboxIcon },
			{ name: '5 osobowy', icon: personIcon },
			{ name: 'Benzyna', icon: fuelIcon },
			{ name: 'Bagażnik - 380L', icon: bootIcon },
			{ name: '5 drzwiowy', icon: doorIcon },
		],
		price: 350,
		hook: true,
		type: 'VAN',
		availability: [
			{
				from: '2023-09-10T10:00:00Z',
				to: '2023-11-29T18:00:00Z',
			},
		],
	},
	{
		id: 3,
		carName: 'Toyota Avensis',
		image: autoImg,
		features: [
			{ name: 'Manualna', icon: gearboxIcon },
			{ name: '5 osobowy', icon: personIcon },
			{ name: 'LPG', icon: fuelIcon },
			{ name: 'Bagażnik - 480L', icon: bootIcon },
			{ name: '5 drzwiowy', icon: doorIcon },
		],
		price: 450,
		hook: false,
		type: 'Taxi',
		availability: [
			{
				from: '2023-09-10T10:00:00Z',
				to: '2023-11-29T18:00:00Z',
			},
		],
	},
]

const CarReservationCard = ({ carTypeFilter }) => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { isCarReserved } = useContext(ReservedCarsContext)
	const handleReserve = useHandleReserve()
	const filteredCars = useCarFilter(carData, carTypeFilter)

	return (
		<CardWrapper>
			{filteredCars.length === 0 ? (
				<ErrorMessageType>{t('noCarsMatchingCriteria')}</ErrorMessageType>
			) : (
				filteredCars.map(car => (
					<CardContainer key={car.id} $reserved={isCarReserved(car.id)}>
						<ReservationInfo
							isReserved={isCarReserved(car.id)}
							handleReserve={handleReserve}
							car={car}
						/>
						<CarDetails car={car} />
						<FeaturesAndPrice
							handleReserve={handleReserve}
							isCarReserved={isCarReserved}
							car={car}
						/>
					</CardContainer>
				))
			)}
			<SuccessModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				content='Operacja zakończona sukcesem!'
				icon='x'
			/>
		</CardWrapper>
	)
}

export default CarReservationCard
