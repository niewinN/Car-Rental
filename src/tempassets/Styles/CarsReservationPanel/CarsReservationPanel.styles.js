import styled from "styled-components"
import ReservationSearch from "../../../layouts/Main/CarSearch/BarSearch/ReservationSearch"
import PhoneNumber from "../../../components/PhoneNumber"
import { Text } from "../PhoneNumber.styles"
import { Link } from "react-router-dom"
import theme from "../theme"
import { FontAwesomeIconReservation } from "../../../layouts/UI/TrolleyIcon"

export const Container = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	width: 100%;
`

export const FilterSection = styled.div`
	width: ${props => props.width};
	min-width: 300px;
`

export const ContentSection = styled.div`
	width: ${props => props.width};
`

export const ReservationSearchShadow = styled(ReservationSearch)``

export const PhoneNumberReservation = styled(PhoneNumber)`
	transform: translateX(-50%);
	position: relative;
	left: 50%;
	width: calc(100% - 40px);

	@media (min-width: 768px) {
		border-radius: 8px 8px 0 0;
		margin-bottom: 3px;
	}

	${Text} {
		width: 90%;
		border-radius: 8px;
	}
`

export const TrolleyIconContainer = styled(Link)`
	display: flex;
	justify-content: flex-start;
	padding: 0 20px;
	align-items: center;
	text-decoration: none;
	color: #000;

	@media (min-width: 992px) {
		padding: 15px 20px 0;
	}

	&:hover {
		color: ${theme.colors.lightGray};
	}

	&:hover ${FontAwesomeIconReservation} {
		color: ${theme.colors.lightGray};
	}
`

export const TrolleyIconText = styled.p`
	margin-left: 10px;
	font-size: 20px;
	font-weight: 500;
`

export const TrolleyIconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`

export const ErrorMessage = styled.p`
	margin: 12px 20px 0;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: #ffecec;
	color: ${theme.colors.primary};
	border: 1px solid ${theme.colors.primary};
	font-size: 14px;
	text-align: center;
	box-shadow: 0 0 5px ${theme.colors.primary};
	font-weight: 500;
	animation: fadeIn 0.3s forwards;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	@media (min-width: 992px) {
		font-size: 16px;
	}
`
