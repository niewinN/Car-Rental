import AutoServices from "./AutoServices"
import React from "react"
import {
	CardWrapper,
	CardTop,
	Triangle,
	AutoNameDiv,
	ImageWrapper,
	ServicesDiv,
} from "../../assets/Styles/AutoPanel/AutoCard.styles"
import { useTranslation } from "react-i18next"

function AutoCard(props) {
	const { t } = useTranslation()
	// const image = require('../../assets/Images/auto.png');
	// const carimage2=require('../../assets/Images/Ford_Focus2.png');
	const servicesList = [
		{
			image: require("../../assets/Images/ServiceImages/person2.png"),
			description: t("carFeatures.5 osobowy"),
		},
		{
			image: require("../../assets/Images/ServiceImages/fuel2.png"),
			description: t("carFeatures.Diesel"),
		},
		{
			image: require("../../assets/Images/ServiceImages/gearbox.png"),
			description: t("carFeatures.Manualna"),
		},
		{
			image: require("../../assets/Images/ServiceImages/boot2.png"),
			description: t("carFeatures.Bagażnik - 280L"),
		},
		{
			image: require("../../assets/Images/ServiceImages/door2.png"),
			description: t("carFeatures.5 drzwiowy"),
		},
		{
			image: require("../../assets/Images/ServiceImages/isofix2.png"),
			description: "Isofix",
		},
		{
			image: require("../../assets/Images/ServiceImages/gps2.png"),
			description: "GPS",
		},
		{
			image: require("../../assets/Images/ServiceImages/hook2.png"),
			description: t("carFeatures.Hook"),
		},
	]

	const cardRef = React.useRef(null) //component reference
	const [cardwidth, setCardWidth] = React.useState(0)
	const [cardheight, setCardHeight] = React.useState(0)

	const updateCardDimensions = () => {
		if (cardRef.current) {
			setCardWidth(cardRef.current.offsetWidth)
			setCardHeight(cardRef.current.offsetHeight)
		}
	}

	React.useEffect(() => {
		updateCardDimensions()
		window.addEventListener("resize", updateCardDimensions) //updating card dimensions by listening the window

		return () => {
			window.removeEventListener("resize", updateCardDimensions)
		}
	}, [])

	return (
		<CardWrapper>
			<CardTop ref={cardRef}>
				<Triangle $cardWidth={cardwidth} $cardHeight={cardheight}></Triangle>
				<AutoNameDiv>
					<p>{props.carName}</p>
				</AutoNameDiv>
				<ImageWrapper>
					<img src={props.carImage} alt='' />
				</ImageWrapper>
			</CardTop>
			<ServicesDiv>
				{/* <AutoServices servicesList={servicesList[0]} />
				<AutoServices servicesList={servicesList[1]} />
				<AutoServices servicesList={servicesList[2]} />
				<AutoServices servicesList={servicesList[3]} />
				<AutoServices servicesList={servicesList[4]} />
				<AutoServices servicesList={servicesList[5]} />
				<AutoServices servicesList={servicesList[6]} />
				<AutoServices servicesList={servicesList[7]} /> */}
				{servicesList.map((service, index) => (
					<AutoServices key={index} servicesList={service} />
				))}
			</ServicesDiv>
		</CardWrapper>
	)
}

export default AutoCard
