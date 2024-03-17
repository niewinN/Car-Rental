import styled from 'styled-components'
import theme from '../theme'

export const HeaderBottomContainer = styled(({ smallMobile, ...props }) => (
	<div {...props} />
))`
	display: none;

	@media (min-width: ${props => (props.smallMobile ? '768px' : '992px')}) {
		display: block;
		max-width: 1260px;
		margin: 0 auto;
		z-index: 9999999;
		background-color: ${theme.colors.primary};
		color: ${theme.colors.secondary};
		text-align: center;
		font-weight: bold;
		font-size: 17px;
		padding: 10px;
	}
`
