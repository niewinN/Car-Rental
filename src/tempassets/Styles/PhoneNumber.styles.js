import styled from 'styled-components'
import theme from './theme'

export const PhoneNumberWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 70px;
	/* border: 1px solid rgba(1, 1, 1, 1); */
	margin: 15px 0 3px 0;
	border-bottom: none;
	border-radius: 10px 10px 0px 0px;
	background-color: ${theme.colors.primary};
	/* z-index: 99999; */

	@media (min-width: 768px) {
		width: 100%;
		border-radius: 0;
		margin: 25px 0 0 0;
	}
`
export const Text = styled.div`
	display: flex;
	justify-content: center;
	width: 90%;
	height: fit-content;
	padding: 5px 5px 5px 5px;
	background-color: #ffffff;
	border-radius: 8px;
	p {
		font-family: Tahoma, Geneva, Verdana, sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: #8a0b24;
	}
	@media (min-width: 768px) {
		width: 100%;
		border-radius: 0;
	}
`
