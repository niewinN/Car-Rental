import styled from "styled-components"
import PhoneNumber from "../../../components/PhoneNumber"
import theme from "../theme"

export const ContactInformationWrapper = styled.div`
	padding: 20px;
`

export const ContactInformationBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.primary};
	color: #fff;
	padding: 20px;
	border-radius: 0 0 8px 8px;
	box-shadow: 0px 2px 15px #646464;
	font-size: 1.6rem;
	letter-spacing: 0.5px;
	line-height: 1.2;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		/* margin-top: 20px; */
		border-radius: 8px;
	}

	@media (min-width: 1024px) {
		/* font-size: 1.6rem */
	}
`

export const ContactInformationItem = styled.div`
	margin-bottom: 1.5em;

	@media (min-width: 768px) {
		margin-bottom: 0;
	}

	@media (min-width: 1024px) {
		&:nth-child(1) {
			padding-left: 20px;
		}

		&:nth-child(3) {
			padding-right: 20px;
		}
	}
`

export const ContactInformationText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		flex-basis: 30%;
		align-items: flex-start;
	}
`

export const ContactArrow = styled.img`
	width: 100px;
	height: 100px;

	@media (min-width: 768px) {
		transform: rotate(45deg);
	}
`

export const ContactInformationItemText = styled.p``

export const PhoneNumberContact = styled(PhoneNumber)`
	@media (min-width: 768px) {
		display: none;
	}
`
