import styled from "styled-components"
import theme from "../theme"

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: fit-content;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0px 2px 15px #646464;
	/* border: 1px solid rgba(1, 1, 1, 1); */
	margin-top: 30px;
	overflow: hidden;
	@media (min-width: 768px) {
		flex-direction: row;
		align-content: center;
		height: 270px;
	}
	@media (min-width: 1024px) {
		width: 1000px;
	}
`
export const CardTop = styled.div`
	position: relative;
	/* border: 3px solid rgba(1, 1, 1, 1); */
	top: 0;
	width: 100%;
	height: 170px;
	overflow: hidden;
	@media (min-width: 768px) {
		height: 100%;
	}
`

export const Triangle = styled.div`
	position: relative;
	top: 0;
	left: 0;
	height: 0px;
	border-left: ${({ $cardWidth }) => $cardWidth}px solid ${theme.colors.primary};
	border-bottom: ${({ $cardHeight }) => $cardHeight}px solid transparent;
`

export const AutoNameDiv = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	left: 50%;
	top: 3%;
	transform: translate(-50%);
	width: 330px;
	text-align: center;
	text-align: center;
	p {
		font-family: Georgia, "Times New Roman", Times, serif;
		font-size: 26px;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		padding-bottom: 20px;
		-webkit-text-stroke: 0.5px ${theme.colors.primary};
	}
`

export const ImageWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 55%;
	left: 50%;
	padding-top: 1%;
	transform: translate(-50%, -50%);
	width: 250px;
	height: 125px;
	/* border: 1px solid rgba(245, 1, 245, 1); */
	/* overflow:hidden; */
	img {
		/* max-width: 100%;
        height: auto; */
		max-height: 80%;
		width: auto;
		/* margin-top: 50px; */
		@media (min-width: 768px) {
			max-height: 100%;
		}
	}
`

export const ServicesDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	justify-content: center;
	top: 45%;
	bottom: 20%;
	width: 100%;
	height: fit-content;
	/* max-height: 150px; */
	/* border: 3px solid rgba(245, 1, 245, 1); */
	margin-bottom: 2%;
	padding: 10px 0 0 5px;
	overflow: auto;
	@media (min-width: 768px) {
		margin-bottom: 0;
		max-height: 100%;
		/* overflow:auto; */
	}
`
