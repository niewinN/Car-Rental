import React from "react"
import Plates from "./Plates"
import styled from "styled-components"
import theme from "../../assets/Styles/theme"
import { useTranslation } from "react-i18next"

const FleetTop = () => {
	const { t } = useTranslation()
	return (
		<FleetNumber>{t("reservationsPhone")}</FleetNumber>
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
	font-size: 17px;
	font-weight: bold;
	max-width: 1260px;
	margin: 0 auto;
`
