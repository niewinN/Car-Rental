import React from 'react'
import Plates from './Plates'
import styled from 'styled-components'
import theme from '../../Assets/Styles/theme'

const FleetTop = () => {
	return (
		<FleetNumber>Rezerwacje: +48 958 232 292</FleetNumber>
		// <Plates/>
	)
}

export default FleetTop

export const FleetNumber = styled.div`
	background-color: ${theme.colors.primary};
	width: 100%;
	text-align: center;
	color: #fff;
	padding: 10px;
	font-size: 18px;
	font-weight: bold;
`
