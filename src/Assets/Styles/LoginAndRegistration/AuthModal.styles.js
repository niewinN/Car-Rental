import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme'

export const slideInFromBottom = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

export const slideOutToTop = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const AuthModalContent = styled.div`
	max-height: 85vh;
	overflow-y: auto;
`

export const AuthModalWrapper = styled.div`
	position: relative;
	margin: 15px;
`

export const AuthModalContainer = styled.div`
	/* position: relative; */
	overflow: hidden;
	width: 100%;
	max-width: 400px;
	background-color: #ffffff;
	border: 1px solid #e0e0e0;
	/* margin: 15px; */
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transform: translateX(100%);
	transition: transform 0.3s ease-out;
	@media (min-width: 768px) {
		width: 300px;
	}

	&.slide-in {
		animation: ${slideInFromBottom} 0.3s forwards;
	}

	&.slide-out {
		animation: ${slideOutToTop} 0.3s forwards;
	}
`

export const TabContainer = styled.div`
	display: flex;
	border-bottom: 2px solid #e0e0e0;
	margin-bottom: 15px;
`

export const TabButton = styled.button`
	flex: 1;
	width: 100%;
	padding: 10px;
	border: none;
	cursor: pointer;
	background-color: ${theme.colors.primary};
	color: white;
	border-radius: 10px;
	transition: background-color 0.3s;
`

export const FormContainer = styled.div`
	padding: 0 20px 20px 20px;
`

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid #e0e0e0;
	transition: border-color 0.3s;

	&:focus {
		border-color: ${theme.colors.primary};
		outline: none;
	}

	&::placeholder {
		color: #aaa;
	}
`

export const ModalOverlay = styled.div`
	display: ${props => (props.isOpen ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(5px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;

	&.fade-in {
		animation: ${fadeIn} 0.3s forwards;
	}

	&.fade-out {
		animation: ${fadeOut} 0.3s forwards;
	}
`

export const SubmitButton = styled(TabButton)`
	width: 100%;
	background-color: ${theme.colors.primary};
	color: white;
	padding: 15px;
	background-color: ${props =>
		props.active ? '#cc6646' : `${theme.colors.primary}`};

	&:nth-child(1) {
		border-radius: 10px 0 0 0;
		border-right: 1px solid white;
	}

	&:nth-child(2) {
		border-radius: 0 10px 0 0;
	}
`

export const SocialIconsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: ${theme.colors.primary};
	padding: 20px;
	border-radius: 0 0 10px 10px;
`

export const SocialIconContainer = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	margin: 0 5px;
	box-shadow: 0 0 5px #f5f5f5;
	transition: transform 0.3s;

	&:hover {
		transform: translateY(-3px);
	}
`

export const SocialIcon = styled(FontAwesomeIcon)`
	font-size: 24px;
	cursor: pointer;
	color: ${theme.colors.primary};
`

export const WelcomeText = styled.h2`
	color: ${theme.colors.primary};
	font-size: 18px;
	margin-bottom: 20px;
	text-align: center;
	padding: 0 15px;

	@media (max-width: 400px) {
		font-size: 15px;
	}
`

export const ArrowButton = styled.button`
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 40px;
	height: 35px;
	border: none;
	border-radius: 0 0 20px 20px;
	font-size: 20px;
	background-color: ${theme.colors.primary};
	color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999999;

	.arrowIcon {
		transform: rotate(270deg);
	}

	&.fade-in {
		animation: ${fadeIn} 0.6s forwards;
	}

	&.fade-out {
		animation: ${fadeOut} 0s forwards;
	}
`

export const StyledIconText = styled.p`
	width: 100%;
	background-color: ${theme.colors.primary};
	color: white;
	font-weight: bold;
	text-align: center;
	padding-top: 10px;
	font-size: 15px;
`
