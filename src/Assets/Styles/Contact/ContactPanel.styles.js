import styled from 'styled-components'
import HeaderBottom from '../../../Layouts/UI/HeaderBottom'

export const ContactPanelDesktop = styled.div`
	@media (min-width: 768px) {
		display: flex;
		width: 100%;
		height: 740px;
	}
`

export const HeaderBottomContact = styled(HeaderBottom)`
	@media (min-width: 768px) {
		display: block;
	}
`
