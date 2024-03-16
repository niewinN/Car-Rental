import React from "react"
import styled from "styled-components"
import CarSearch from "./CarSearch"
import SearchingParameters from "./SearchingParameters"

function Main() {
	return (
		<div>
			<CarSearch />
			<SearchingParameters />
			<StyledComponent></StyledComponent>
		</div>
	)
}

export default Main

const StyledComponent = styled.div`
	display: flex;

	@media (min-width: 768px) {
		display: none;
	}
`
