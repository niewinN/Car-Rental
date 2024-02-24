import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme'

export const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	${props =>
		props.isScrolling &&
		`
    box-shadow: 0 0 15px ${theme.colors.primary};
  `}
	background-color: #fff;
`

export const StyledContainer = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
`

export const Nav = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: ${theme.colors.primary};
	color: #fff;
	height: 8vh;
	margin: 0 auto;
	width: 100%;

	@media (min-width: 768px) {
		background-color: #fff;
		color: ${theme.colors.primary};
		height: 82px;
	}
`

export const NavLogo = styled.div`
	@media (min-width: 768px) {
		z-index: 2;
	}
`

export const NavLogoName = styled.a`
	font-weight: bold;
	text-decoration: none;
	color: ${theme.colors.secondary};
	font-size: 2.5rem;

	@media (min-width: 1024px) {
		font-size: 3.5rem;
	}

	@media (min-width: 768px) {
		color: ${theme.colors.primary};
	}
`

export const NavLogoText = styled.p`
	font-size: 0.75rem;

	@media (max-width: 330px) {
		display: none;
	}

	@media (min-width: 768px) {
		font-size: 0.9rem;
	}
`

export const NavList = styled.ul`
	position: fixed;
	list-style: none;
	right: 0;
	top: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: ${props =>
		props.$showNav ? 'translateX(0)' : 'translateX(100%)'};
	backdrop-filter: blur(15px);
	background-color: rgba(183, 57, 11, 0.6);
	z-index: 998;
	transition: 0.3s;

	@media (min-width: 768px) {
		position: absolute;
		height: 82px;
		width: 75%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		transform: translateX(0);
		overflow: hidden;
		backdrop-filter: blur(0);
		background-color: #fff;
		z-index: 0;
		transition: 0.3s;
	}
`

export const NavLink = styled(Link)`
	position: relative;
	display: block;
	padding: 1em;
	font-size: 1.8rem;
	color: ${theme.colors.secondary};
	text-decoration: none;
	font-weight: normal;
	font-weight: ${props => (props.$isFirst ? 'bold' : 'normal')};
	transition: 0.3s;
	overflow: hidden;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		width: 0px;
		border-top: 2px solid ${theme.colors.primary};
		transition: all 0.3s;
	}

	&::before {
		right: 50%;
	}

	&::after {
		left: 50%;
	}

	@media (min-width: 768px) {
		color: ${theme.colors.primary};

		&:hover::before {
			width: 50%;
			right: 0;
		}

		&:hover::after {
			width: 50%;
			left: 0;
		}

		&:hover {
			color: ${theme.colors.lightGray};
		}
	}

	@media (min-width: 1024px) {
		padding: 1em 2em;
		font-size: 2rem;
	}
`

export const NavRight = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 2%;
	transition: color 0.3s;

	&:hover {
		color: ${theme.colors.lightGray};
	}
`

export const NavLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	display: ${props => (props.$showNav ? 'none' : 'flex')};

	@media (min-width: 768px) {
		display: flex;
	}
`

export const NavLoginText = styled.p`
	font-size: 1.2rem;

	@media (min-width: 1024px) {
		font-size: 1.5rem;
	}
`

export const NavFontAwesomeIcon = styled(FontAwesomeIcon)`
	font-size: 2rem;
	padding-bottom: 0.3em;

	@media (min-width: 1024px) {
		font-size: 2.2rem;
	}
`

export const BurgerIcon = styled.button`
	display: flex;
	position: ${props => (props.$isExpanded ? 'fixed' : 'block')};
	top: 20px;
	right: 2%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding-left: 1em;
	z-index: 999;

	@media (min-width: 768px) {
		display: none;
	}
`

export const BurgerLine = styled.div`
	height: 0.3em;
	margin: 0.3em;
	background-color: ${theme.colors.secondary};
	transition: transform 0.3s, margin 0.3s, opacity 0.3s, width 0.3s;

	&:nth-child(1) {
		width: 3em;
	}

	&:nth-child(2) {
		width: 2.25em;
	}

	&:nth-child(3) {
		width: 1.5em;
	}

	&.active:nth-child(1) {
		transform: rotate(405deg) translate(0.25em, 0.35em);
		margin: 0;
	}

	&.active:nth-child(2) {
		opacity: 0;
	}

	&.active:nth-child(3) {
		transform: rotate(-405deg) translate(0.5em, -0.6em);
		width: 3em;
		margin: 0;
	}
`
