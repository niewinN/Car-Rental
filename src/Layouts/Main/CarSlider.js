import triangle from '../../Assets/Images/triangle.png'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import theme from '../../Assets/Styles/theme'

const image1 = require('../../Assets/Images/auto.png')
const image2 = require('../../Assets/Images/auto.png')
const image3 = require('../../Assets/Images/auto.png')

const CarSliderBox = styled.div`
	position: relative;
	width: 100%;
	height: 70vw;
	margin: 50px 0 0;
	font-size: 2rem;
	color: white;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`

const TriangleBackground = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const CarSliderContent = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		margin: 5% 11%;
		text-align: center;
	}

	img {
		width: 90%;
		margin-top: 5%;
	}
`

const StyledPointers = styled.div`
	display: flex;
	width: 100px;
	margin: 15% auto 0;
`

const Pointer = styled.div`
	display: block;
	width: 10px;
	height: 10px;
	margin: auto;
	background-color: ${theme.colors.primary};
	border-radius: 100%;

	${props =>
		props.isActive &&
		css`
			padding: 10px;
		`}
`

const StyledContainer = styled.div`
	margin: auto;
	display: flex;
	margin: 5% 0;
`

const StyledArrow = styled.div`
	svg {
		height: 20px;
		cursor: pointer;
		margin: 15px 30px;

		:hover {
			transition: 0.6s;
			transform: scale(1.15);
		}
	}

	.left {
		color: white;
	}

	.right {
		color: ${theme.colors.primary};
	}
`

const ImageBox = styled.div`
	width: 60%;
	margin: auto;
	display: flex;
	overflow: hidden;

	img {
		width: 85%;
		margin: 0 10%;
	}
`

const TitleBox = styled.div`
	display: flex;
	overflow: hidden;
	margin: 0 25%;

	p {
		font-size: 1.2rem;
		text-align: center;
		color: white;
		font-weight: bold;
		margin: 2% 35%;
		min-width: 150px;
	}
`

const CarSlider = () => {
	const { t } = useTranslation()

	const totalPointers = 3

	const [active, setActive] = useState(0)

	const nextSlide = setTimeout(() => {
		if (active < 2) {
			setActive(active + 1)
		} else {
			setActive(active - 2)
		}
	}, 5000)

	return (
		<CarSliderBox>
			<TriangleBackground src={triangle} alt='Triangle Background' />
			<CarSliderContent>
				<TitleBox>
					<p
						className='car-title'
						style={{
							transform: `translateX(-${active * 310}%)`,
							transition: `0.6s`,
						}}>
						{t('carSlider.slogan1')}
					</p>
					<p
						className='car-title'
						style={{
							transform: `translateX(-${active * 310}%)`,
							transition: `0.6s`,
						}}>
						{t('carSlider.slogan2')}
					</p>
					<p
						className='car-title'
						style={{
							transform: `translateX(-${active * 310}%)`,
							transition: `0.6s`,
						}}>
						{t('carSlider.slogan3')}
					</p>
				</TitleBox>
				<StyledContainer>
					<StyledArrow>
						{/* <FontAwesomeIcon icon={faCircleArrowLeft} className='left' /> */}
					</StyledArrow>
					<ImageBox>
						<img
							src={image1}
							alt=''
							style={{
								transform: `translateX(-${active * 125}%)`,
								transition: `0.6s`,
							}}
						/>
						<img
							src={image2}
							alt=''
							style={{
								transform: `translateX(-${active * 125}%)`,
								transition: `0.6s`,
							}}
						/>
						<img
							src={image3}
							alt=''
							style={{
								transform: `translateX(-${active * 125}%)`,
								transition: `0.6s`,
							}}
						/>
					</ImageBox>
					<StyledArrow>
						{/* <FontAwesomeIcon onClick={nextSlide} icon={faCircleArrowRight} className='right' /> */}
					</StyledArrow>
				</StyledContainer>
				<StyledPointers>
					{[...Array(totalPointers)].map((_, index) => (
						<Pointer key={index} isActive={index === active} />
					))}
				</StyledPointers>
			</CarSliderContent>
		</CarSliderBox>
	)
}

export default CarSlider
