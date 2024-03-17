import styled, { keyframes } from 'styled-components'
import theme from '../theme'

export const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	animation: ${fadeIn} 0.3s forwards;
	z-index: 9999;
`

export const ModalContent = styled.div`
	position: fixed;
	/* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
	top: ${({ position }) => (position === 'top-right' ? '2%' : '50%')};
	left: ${({ position }) => (position === 'top-right' ? '95%' : '50%')};
	transform: ${({ position }) =>
		position === 'top-right' ? 'translate(-100%, 0)' : 'translate(-50%, -50%)'};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: #ffffff;
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`

export const circleAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

export const tickAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

export const IconSvg = styled.svg`
	width: 80px;
	height: 80px;
	fill: none;
	stroke: ${theme.colors.primary};
	stroke-width: 3;
	stroke-linecap: round;
	stroke-linejoin: round;
	margin-bottom: 15px;

	circle {
		stroke-dasharray: 157;
		stroke-dashoffset: 157;
		animation: ${circleAnimation} 1.5s forwards;
	}

	path {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		animation: ${tickAnimation} 1.5s forwards;
	}
`

export const SuccessMessage = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	color: black;
	margin: 10px 0;
	text-align: center;
`

export const Countdown = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 1.3rem;
	font-weight: bold;
	color: ${theme.colors.primary};
	background-color: #ffffff;
	padding: 5px 10px;
	border-radius: 50%;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
`

export const BottomCloseButton = styled.button`
	align-self: center;
	background-color: ${theme.colors.primary};
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	margin-top: 15px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${theme.colors.hover};
	}
`
