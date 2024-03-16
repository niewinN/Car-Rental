import React from "react"
import styled from "styled-components"
import triangle from "../../assets/Images/triangle.png"
import NumberSearch from "./CarSearch/NumberSearch"
import BarSearch from "./CarSearch/BarSearch"
import theme from "../../assets/Styles/theme"

const CarSearch = () => {
	return (
		<StyledComponent>
			<SquareBackground />
			<TriangleBackground src={triangle} alt='' />
			<div className='empty'></div>
			<NumberSearch />
			<BarSearch />
		</StyledComponent>
	)
}

const StyledComponent = styled.section`
	width: 90%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 1rem auto;
	border-radius: 10px;
	min-height: 400px;
	background-color: ${theme.colors.primary};
	position: relative;
	.empty {
		height: 3vh;
	}

	@media (min-width: 768px) {
		margin: 1rem 0 0;
		width: 100%;
		border-radius: 0;
		background: none;
	}
`

const TriangleBackground = styled.img`
	display: none;
	/* border:1px solid black; */
	@media (min-width: 768px) {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 100%;
		z-index: -1;
		display: block;
	}
`

const SquareBackground = styled.div`
	display: none;

	@media (min-width: 768px) {
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		z-index: -1;
		display: block;
		background-color: ${theme.colors.primary};
	}
`

export default CarSearch
