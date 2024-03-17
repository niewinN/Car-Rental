import styled from "styled-components"
import theme from "../theme"
import { ContainerWrapper } from "../../../components/Container/Container"

export const AuthorsBox = styled.div`
	background-color: ${theme.colors.primary};
	border-top: 2px solid ${theme.colors.secondary};
	color: ${theme.colors.secondary};
	padding: 10px 0;
	font-size: 12px;
	letter-spacing: 0.5px;
	line-height: 1.2;

	@media (min-width: 1300px) {
		margin-left: calc((2560px - 100%) / -2);
		margin-right: calc((25600px - 100%) / -2);
		max-width: 2560px;
	}

	@media (min-width: 768px) {
		font-size: 14px;
	}
`

export const AuthorsContainer = styled(ContainerWrapper)`
	margin: 0 auto;
`

export const AuthorsText = styled.p`
	margin-left: 20px;

	@media (min-width: 768px) {
		margin-left: 40px;
	}
`
