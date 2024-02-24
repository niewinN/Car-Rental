import styled from 'styled-components'
import theme from '../theme'

export const ContactMapWrapper = styled.div`
	padding: 20px;

	@media (min-width: 768px) {
		flex-basis: 60%;
	}
`

export const ContactMapBox = styled.div`
	background-color: ${theme.colors.primary};
	border-radius: 8px;
	box-shadow: 0px 2px 15px #646464;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	@media (max-width: 768px) {
		height: 350px;
	}
`

export const ContactMapAddress = styled.div`
	width: 90%;
	margin: 20px auto;
	border-radius: 8px;
	border: none;
	overflow: hidden;
	height: 300px;

	@media (min-width: 768px) {
		height: 600px;
	}
`
