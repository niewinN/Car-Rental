import React from 'react'
import styled from 'styled-components'
import CarSearch from './CarSearch'
import SearchingParameters from './SearchingParameters'
import CarSlider from './CarSlider'

function Main() {
	return (
		<div>
			<CarSearch />
			<SearchingParameters />
			<StyledComponent>
				<CarSlider />
			</StyledComponent>
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
