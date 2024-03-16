import styled from "styled-components"
import Datetime from "react-datetime"
import { Link } from "react-router-dom"
import theme from "../../../../../assets/Styles/theme"

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${theme.colors.primary};
	font-weight: bold;
	padding: 16px 0;
	width: 100%;
	height: 100%;
	text-align: center;
`

const StyledDate = styled.div`
	.date {
		background-color: #fff;
		width: 100%;
		height: 5rem;
		display: flex;
		color: ${theme.colors.primary};
		margin: 0 auto 15px;
		border-radius: 5px;
		cursor: pointer;
	}

	.pick-up,
	.repick {
		font-size: 1.5rem;
		padding: 0.5rem 0;
		width: 50%;
		text-align: center;
	}

	.pick-up :nth-child(1),
	.repick :nth-child(1) {
		color: #6c6c6c;
	}

	.line {
		width: 0.1rem;
		height: 4rem;
		margin: auto 0;
		background: #000;
	}
	.date p {
		font-size: 1.5rem;
		margin: auto;
	}

	@media (min-width: 768px) {
		.date {
			height: 5rem;
		}

		.pick-up,
		.repick {
			font-size: 1.3rem;
		}

		.line {
			height: 3.5rem;
		}
		.date p {
			font-size: 1.4rem;
		}
	}
`

const StyledCity = styled.select`
	height: 5rem;
	width: 100%;
	margin: 0 auto 15px;
	border-radius: 5px;
	cursor: pointer;

	@media (min-width: 768px) {
		height: 5rem;
	}
`

const StyledRefund = styled.div`
	color: white;
	font-size: 1.5rem;
	display: flex;
	margin: 3% 10%;

	.refund-pointer {
		height: 1.8rem;
		width: 1.8rem;
		border-radius: 50%;
		background: white;
		cursor: pointer;

		&.active {
			background: black;
		}
	}

	p {
		margin: auto 0 auto 1rem;
	}

	@media (min-width: 768px) {
		color: white;
		font-size: 1.1rem;
		display: flex;

		.refund-pointer {
			height: 1.6rem;
			width: 1.6rem;
			border-radius: 50%;
			background: white;
		}

		p {
			margin: auto 0 auto 0.4rem;
		}
	}
`

const StyledButton = styled.div`
	display: flex;
	height: 5rem;
	width: 100%;
	margin: 10px auto;
	border-radius: 10px;
	background: white;
	color: ${theme.colors.primary};
	font-size: 1.5rem;
	text-transform: uppercase;
	box-shadow: none;
	cursor: pointer;
	border-style: none;
	font-weight: bold;

	@media (min-width: 768px) {
		height: 5rem;
		font-size: 1.3rem;
	}
`

const StyledLanguage = styled.div`
	height: 5rem;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	margin-bottom: 15px;

	img {
		width: 80px;
		height: 40px;
		margin-right: 10px;
		cursor: pointer;
	}
`

export const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledDatePanel = styled.div`
	z-index: 2147483647;
	display: flex;
	position: fixed;
	/* width: 400px; */
	/* height0px; */
	/* width: 70%; dostosuj do swoich potrzeb */
	background-color: white;
	/* border: 0.2rem solid black; */
	border-radius: 10px;
	box-shadow: 0px 2px 20px #646464;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	/* z-index: 9999; */
	flex-direction: column;
	/* padding: 2rem; */
	padding-bottom: 10px;
	justify-content: space-between;
	overflow: hidden;
`

const StyledDateTime = styled(Datetime)`
	width: 100%;

	input {
		padding: 6px 10px;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		font-size: 14px;
		transition: border-color 0.3s;
		&:focus {
			border-color: ${theme.colors.primary};
			outline: none;
			box-shadow: 0 0 5px rgba(138, 11, 36, 0.2);
		}
	}

	.rdtSwitch {
		color: ${theme.colors.primary};
	}

	.rdtTimeToggle {
		display: none;
	}

	.rdtPicker {
		border: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		border-radius: 4px;

		thead {
			background-color: #f5f5f5;
			color: ${theme.colors.primary};
			th {
				padding: 6px 10px;
				border: none;
				font-size: 14px;
			}
		}

		tbody td {
			width: 28px;
			height: 28px;
			line-height: 28px;
			font-size: 12px;
			text-align: center;
			color: #333;

			&.rdtActive {
				background-color: ${theme.colors.primary};
				color: #ffffff;
			}

			&:hover {
				/* background-color: ${theme.colors.hover}; */
			}
		}
	}

	@media (max-width: 480px) {
		.rdtPicker {
			width: 280px;
		}
	}
`

const StyledButtonDate = styled.button`
	padding: 10px 15px;
	font-size: 16px;
	border: none;
	border-radius: 4px;
	background-color: ${theme.colors.primary};
	color: #ffffff;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${theme.colors.hover};
	}

	&:active {
		background-color: #4a0718;
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`
const HideButtons = styled.div`
	.hide-buttons .buttons {
		display: none;
	}
`

export {
	StyledButton,
	HideButtons,
	StyledCity,
	StyledDate,
	StyledRefund,
	StyledLanguage,
	StyledDatePanel,
	StyledDateTime,
	StyledLink,
	StyledButtonDate,
}
