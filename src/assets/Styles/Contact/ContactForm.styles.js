import styled from 'styled-components'
import theme from '../theme'

export const ContactFormWrapper = styled.div`
	padding: 20px;

	@media (min-width: 768px) {
		flex-basis: 40%;
	}
`

export const ContactFormPanel = styled.form`
	border-radius: 8px;
	box-shadow: 0px 2px 15px #646464;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
`

export const ContactFormTitle = styled.div`
	text-align: center;
	background-color: ${theme.colors.primary};
	font-size: 1.6rem;
	color: #fff;
	padding: 10px;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`

export const ContactFormBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
`

export const ContactFormLabel = styled.label`
	font-size: 1.6rem;
	color: #2b2a2a;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`

export const ContactFormInput = styled.input`
	outline: transparent;
	border: none;
	border-bottom: 1px solid ${theme.colors.primary};
	margin-top: 10px;
	font-size: 1.6rem;
	color: #2b2a2a;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`

export const ContactFormTextarea = styled.textarea`
	min-height: 80px;
	max-height: 80px;
	resize: vertical;
	/* max-width: 100%; */
	/* min-width: 100%; */
	font-size: 1.6rem;
	outline: transparent;
	border: none;
	border-bottom: 1px solid ${theme.colors.primary};
	margin-top: 10px;
	color: #2b2a2a;
	overflow: hidden;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`

export const ContactFormBtn = styled.button`
	background-color: ${theme.colors.primary};
	color: #fff;
	border: none;
	padding: 10px;
	border-radius: 8px;
	margin-top: 20px;
	font-size: 1.6rem;
	cursor: pointer;

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`
