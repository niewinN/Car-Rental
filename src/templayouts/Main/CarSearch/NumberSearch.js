import styled from "styled-components"
import { useTranslation } from "react-i18next"
import theme from "../../../assets/Styles/theme"

function NumberSearch() {
	const { t } = useTranslation()

	return <StyledComponent>{t("reservation")}</StyledComponent>
}

export default NumberSearch

const StyledComponent = styled.div`
	width: 90%;
	background-color: #fff;
	text-align: center;
	padding: 0.2rem 0;
	font-size: 2rem;
	color: ${theme.colors.primary};
	font-weight: bold;
	margin: 0 auto;
	margin-bottom: 3rem;
	padding: 10px 5px;
	border-radius: 10px;

	@media (min-width: 768px) {
		padding: 10px;
		width: 100%;
		border-radius: 0;
	}
`
