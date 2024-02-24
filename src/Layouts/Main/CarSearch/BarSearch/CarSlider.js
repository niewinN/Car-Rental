import React, { useState, useEffect, useRef } from 'react'
import {
	StyledCarSlider,
	TitleBox,
	StyledContainer,
	StyledArrow,
	ImageBox,
	StyledPointers,
	Pointer,
	TitleBoxWrapper,
	SliderContainer,
} from '../../../../Assets/Styles/CarSearch/CarSlider.styles'
import { useTranslation } from 'react-i18next'

function CarSlider() {
	const { t } = useTranslation()
	const image1 = require('../../../../Assets/Images/auto.png')
	const imageArray = [image1, image1, image1]
	const totalPointers = imageArray.length
	const intervalRef = useRef(null)
	const [active, setActive] = useState(0)

	const changeSlider = index => {
		clearInterval(intervalRef.current)
		setActive(index)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setActive(prevActive => {
				if (prevActive === totalPointers - 1) {
					// Chcemy przeskoczyć do "pierwszego" slajdu bez animacji
					requestAnimationFrame(() => {
						// Ustawiamy slajd na pierwszy po minimalnym opóźnieniu, aby uniknąć widocznej animacji
						setActive(0)
					})
					return prevActive
				} else {
					return (prevActive + 1) % totalPointers
				}
			})
		}, 4000) // Czas przejścia

		return () => clearInterval(interval)
	}, [totalPointers])

	useEffect(() => {
		const resetInterval = () => {
			clearInterval(intervalRef.current)
			const interval = setInterval(() => {
				setActive(prevActive => (prevActive + 1) % totalPointers)
			}, 4000)
			intervalRef.current = interval
		}

		resetInterval()

		return () => clearInterval(intervalRef.current)
	}, [active])

	return (
		<StyledCarSlider>
			<TitleBoxWrapper>
				{[...Array(totalPointers)].map((_, index) => (
					<TitleBox
						key={index}
						style={{
							transform: `translateX(-${active * 100}%)`,
							transition: `0.6s`,
						}}>
						<p>{t(`carSlider.slogan${index + 1}`)}</p>
					</TitleBox>
				))}
			</TitleBoxWrapper>
			<StyledContainer>
				<StyledArrow></StyledArrow>
				<ImageBox>
					{imageArray.map((item, index) => (
						<img
							src={item}
							alt=''
							key={index}
							style={{
								transform: `translateX(-${active * 110}%)`,
								transition: `0.6s`,
							}}
						/>
					))}
				</ImageBox>
				<StyledArrow></StyledArrow>
			</StyledContainer>
			<StyledPointers>
				{[...Array(totalPointers)].map((_, index) => (
					<Pointer
						key={index}
						onClick={() => changeSlider(index)}
						style={{ padding: index === active ? '8px' : '0' }}
					/>
				))}
			</StyledPointers>
		</StyledCarSlider>
	)
}

export default CarSlider
