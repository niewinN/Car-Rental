import styled from 'styled-components'
import {
	AuthModalContainer,
	TabButton,
	FormContainer,
	Input,
	AuthModalWrapper,
} from './AuthModal.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme'

export const EditDataModalContainer = styled(AuthModalContainer)`
	max-height: 85vh;
	overflow-y: auto;
`

export const EditDataModalWrapper = styled(AuthModalWrapper)``

export const InputEdit = styled(Input)`
	width: 85%;
`

export const StyledPencilIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	margin-left: 10px;
	color: #4a4a4a;
	font-size: 16px;
`

export const EditDataHeader = styled.h2`
	color: #fff;
	background-color: ${theme.colors.primary};
	padding: 20px;
	font-size: 20px;
	margin-bottom: 20px;
	text-align: center;
	border-radius: 10px 10px 0 0;

	@media (max-width: 400px) {
		font-size: 17px;
	}
`

export const EditDataForm = styled(FormContainer)``

export const SaveChangesButton = styled(TabButton)`
	background-color: ${theme.colors.primary};
	margin-top: 20px;
	margin-bottom: 10px;
`

export const LogoutButton = styled(TabButton)`
	background-color: ${theme.colors.primary};
`

export const CancelButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: transparent;
	border: none;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
`
