import styled from 'styled-components'
import theme from '../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const FooterBox = styled.div`
	background-color: ${theme.colors.primary};

	@media (min-width: 1300px) {
		margin-left: calc((2560px - 100%) / -2);
		margin-right: calc((25600px - 100%) / -2);
		max-width: 2560px;
	}
`

export const FooterContainer = styled.div`
	display: flex;
	color: ${theme.colors.secondary};
	padding: 20px;
	flex-wrap: wrap;
	justify-content: space-between;
	font-size: 1.2rem;
	margin-top: 50px;
	letter-spacing: 0.5px;
	line-height: 1.2;

	@media (min-width: 768px) {
		padding: 40px 80px 40px 40px;
	}

	@media (min-width: 1024px) {
		font-size: 1.4rem;
	}
`

export const FooterInformation = styled.div`
	flex-basis: 50%;

	@media (min-width: 768px) {
		flex-basis: 33.3%;
	}
`

export const InfoBox = styled.div`
	padding-bottom: 10px;
`

export const FooterLinks = styled.div`
	flex-basis: 50%;
`

export const FooterLink = styled(Link)`
	color: ${theme.colors.secondary};
	text-decoration: none;
`

export const FooterIcons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const FooterIcon = styled(FontAwesomeIcon)`
	width: 20px;
	height: 20px;
`

export const InfoBoxText = styled.p``
