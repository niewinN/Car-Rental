import styled from 'styled-components'

export const AutoServiceWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	/* border: 1px solid rgba(1, 1, 1, 1); */
	/* margin: 2.5px 5px; */
	width: 140px;
	padding: 10px;
`
export const ServiceImg = styled.div`
	width: 30px;
	/* border: 1px solid rgba(1, 1, 1, 1); */
	img {
		max-width: 100%;
		height: auto;
	}
	p {
		padding: 3px 10px 3px 5px;
		font-size: 23px;
	}
`
export const ServiceDescription = styled.div`
	height: fit-content;
	/* border: 1px solid rgb(157, 41, 41); */
	width: 70%;
	margin-left: 3%;
	p {
		margin: 0;
		font-family: Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		font-weight: 500;
		/* border: 1px solid rgba(1, 1, 1, 1); */
	}
`
