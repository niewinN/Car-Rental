import React from "react"
import { PhoneNumberWrapper, Text } from "../Assets/Styles/PhoneNumber.styles"
import { useTranslation } from "react-i18next"

function PhoneNumber(props) {
	const { t } = useTranslation()

	return (
		<PhoneNumberWrapper {...props}>
			<Text>
				<p>{t("reservationsPhone")}</p>
			</Text>
		</PhoneNumberWrapper>
	)
}

export default PhoneNumber
