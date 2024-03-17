import React from 'react'
import styled from 'styled-components'

export const ContainerWrapper = styled.div`
	max-width: 1300px;
	margin: 80px auto 0;
	width: 100%;
`

const Container = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
