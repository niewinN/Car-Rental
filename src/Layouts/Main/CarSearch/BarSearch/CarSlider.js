import React, { useState, useEffect, useRef } from "react"
import {
	StyledCarSlider,
	TitleBox,
	StyledContainer,
	StyledArrow,
	ImageBox,
	StyledPointers,
	Pointer,
	TitleBoxWrapper,
} from "../../../../assets/Styles/CarSearch/CarSlider.styles"
import { useTranslation } from "react-i18next"

function CarSlider() {
	const { t } = useTranslation()
	const image1 = require("../../../../assets/Images/auto.png")
	const imageArray = [image1, image1, image1]
	const totalPointers = imageArray.length
	const intervalRef = useRef(null)
	const [active, setActive] = useState(0)
	const [isReversing, setIsReversing] = useState(false)

	const changeSlider = index => {
		clearInterval(intervalRef.current)
		setActive(index)
		setIsReversing(false)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setActive(prevActive => {
				if (isReversing) {
					return prevActive === 0 ? prevActive : prevActive - 1
				} else {
					return prevActive === totalPointers - 1 ? prevActive : prevActive + 1
				}
			})
		}, 4000)

		intervalRef.current = interval

		return () => clearInterval(interval)
	}, [totalPointers, isReversing])

	useEffect(() => {
		if (active === totalPointers - 1 && !isReversing) {
			setIsReversing(true)
		} else if (active === 0 && isReversing) {
			setIsReversing(false)
		}
	}, [active, isReversing])

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
						style={{ padding: index === active ? "8px" : "0" }}
					/>
				))}
			</StyledPointers>
		</StyledCarSlider>
	)
}

export default CarSlider
