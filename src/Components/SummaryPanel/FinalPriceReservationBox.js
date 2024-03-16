import React, { useContext } from "react"
import {
	FinalPrice,
	FinalPriceBtn,
	FinalPriceContainer,
	SummaryFormText,
	SummaryFormTextBox,
	FinalPriceDiv,
} from "../../assets/Styles/SummaryPanel/FinalPriceReservationBox.styles"
import { useTranslation } from "react-i18next"
import { ReservedCarsContext } from "../../contexts/ReservedCarsContext"

function FinalPriceReservationBox({
	onSubmit,
	showSummaryFormText = true,
	fillUserData = () => {},
}) {
	const { t } = useTranslation()
	const { reservedCars } = useContext(ReservedCarsContext)
	const total = reservedCars.reduce((sum, car) => sum + car.price, 0)

	// const handleSubmit = async (e) => {
	//   e.preventDefault();
	//   await fillUserData();
	//   onSubmit();
	// };

	const handleSubmit = async e => {
		try {
			// await fillUserData();
			onSubmit()
		} catch (error) {
			console.error("User not found or another error occurred:", error)
		}
	}

	return (
		<FinalPriceContainer>
			<FinalPrice>
				{t("price.sum")} {total} zł
			</FinalPrice>
			<FinalPriceDiv>
				<SummaryFormTextBox>
					{showSummaryFormText && (
						<SummaryFormText>{t("price.summary")}</SummaryFormText>
					)}
				</SummaryFormTextBox>
				<FinalPriceBtn
					type='submit'
					onClick={handleSubmit}
					disabled={reservedCars.length === 0}>
					{t("price.book")}
				</FinalPriceBtn>
			</FinalPriceDiv>
		</FinalPriceContainer>
	)
}

export default FinalPriceReservationBox
