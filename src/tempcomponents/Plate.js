import styled from "styled-components"
import React from "react"
import theme from "../assets/Styles/theme"

function Plate({ carTypes, highlighted, onSelect }) {
	return (
		<PlateWrapper $highlighted={highlighted} onClick={() => onSelect(carTypes)}>
			<ImageDiv>
				<img src={carTypes.image} alt='' />
			</ImageDiv>
			<CarNameDiv>
				<p>{carTypes.description}</p>
			</CarNameDiv>
		</PlateWrapper>
	)
}

export default Plate

const PlateWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	position: relative;
	width: ${props => props.width || "155px"};
	height: 110px;
	border-radius: 4%;
	background: #ffffff;
	background-blend-mode: normal;
	margin: 5px 10px;
	border: ${props =>
		props.$highlighted
			? `1px solid ${theme.colors.primary}`
			: "1px solid #757575"};
	box-shadow: ${props =>
		props.$highlighted
			? `0px 5px 20px ${theme.colors.primary}`
			: "inset 0px 5px 14px rgba(100,100,100,0.5)"};
	transform: ${props => (props.$highlighted ? "scale(1.02)" : "scale(1)")};
	transition: border 0.3s, box-shadow 0.3s, transform 0.3s;
	cursor: pointer;

	@media (min-width: 768px) {
		margin: 5px 10px;
	}
`

const ImageDiv = styled.div`
	position: absolute;
	width: 90px;
	top: 43%;
	left: 50%;
	transform: translate(-50%, -50%);

	img {
		max-width: 100%;
		height: auto;
	}
`

const CarNameDiv = styled.div`
	position: absolute;
	width: auto;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%);

	p {
		color: #757575;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 16px;
		font-weight: 400;
	}
`
