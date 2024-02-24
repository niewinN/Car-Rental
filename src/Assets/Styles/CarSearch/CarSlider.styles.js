import styled from 'styled-components'
import theme from '../theme'

export const StyledCarSlider = styled.div`
	display: none;
	width: 100%;
	@media (min-width: 768px) {
		display: flex;
		min-height: 100%;
		margin: 0 auto;
		flex-basis: 55%;
		flex-direction: column;
		justify-content: space-around;
		/* border:1px solid black; */
	}
`
export const StyledPointers = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		width: 50%;
		height: 30px;
		margin: 0 20%;
	}
`

export const Pointer = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: block;
		width: 10px;
		height: 10px;
		margin: auto 10px;
		background-color: ${theme.colors.primary};
		border-radius: 100%;
		cursor: pointer;
		transition: 1s;
	}
`

export const StyledContainer = styled.div`
	/* margin: auto; */
	display: flex;
`

export const StyledArrow = styled.div`
	svg {
		height: 50px;
		cursor: pointer;

		:hover {
			transition: 0.6s;
			transform: scale(1.15);
		}
	}

	.left {
		color: white;
	}

	.right {
		color: #8a0b24;
	}
`

export const ImageBox = styled.div`
	width: 80%;
	/* margin: auto; */
	display: flex;
	overflow: hidden;
	margin: 0 3%;
	box-shadow: inset 20px 0 10px -10px ${theme.colors.primary};

	@media (min-width: 1024px) {
		width: 80%;
	}

	img {
		width: 85%;
		margin: 0 5%;
	}
`
export const TitleBoxWrapper = styled.div`
	width: 300px;
	overflow: hidden;
	margin-left: 10%;
	white-space: nowrap;
	@media (min-width: 768px) {
		width: 50%;
	}
	@media (min-width: 870px) {
		width: 55%;
	}
	@media (min-width: 900px) {
		width: 60%;
	}
	@media (min-width: 1050px) {
		width: 65%;
	}
	@media (min-width: 1200px) {
		width: 70%;
	}
`
export const TitleBox = styled.div`
	display: inline-block;
	width: 100%;
	height: 100%;
	padding: 2%;
	overflow: hidden;
	flex-wrap: wrap;

	p {
		display: block;
		font-size: 2.2rem;
		text-align: center;
		color: white;
		font-weight: bold;
		word-wrap: break-word;
		white-space: normal;
	}
`
