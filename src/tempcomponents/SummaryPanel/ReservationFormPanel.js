import React from "react"
import FinalPriceReservationBox from "./FinalPriceReservationBox"
import ReservationForm from "./ReservationForm"
import PermissionBox from "./PermissionBox"
import { ErrorMessagePermission } from "../../assets/Styles/SummaryPanel/ReservationFormPanel.styles"
import userData from "../../assets/Files/userData.json"

function ReservationFormPanel({ formik, reservedCars, setFormValues }) {
	const getUserDataByEmail = email => {
		const user = userData.find(u => u.email === email)
		if (user) {
			return user
		} else {
			throw new Error("User not found")
		}
	}

	const fillUserData = async () => {
		try {
			const email = formik.values.email
			console.log("Fetching data for email:", email)
			const user = await getUserDataByEmail(email)
			console.log("User data retrieved:", user)
			for (const key in user) {
				if (user.hasOwnProperty(key)) {
					formik.setFieldValue(key, user[key])
				}
			}
			formik.setErrors({})
		} catch (error) {
			console.error("User not found or another error occurred:", error)
		}
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				fillUserData().then(() => {
					formik.handleSubmit()
				})
			}}>
			<FinalPriceReservationBox
				reservedCars={reservedCars}
				onSubmit={formik.handleSubmit}
				fillUserData={fillUserData}
			/>
			<ReservationForm
				form={formik.values}
				setForm={formik.setFieldValue}
				errors={formik.errors}
				fillUserData={fillUserData}
				formik={formik}
			/>
			<PermissionBox
				permissions={{
					carAgreement: formik.values.carAgreement,
					personalDataAgreement: formik.values.personalDataAgreement,
				}}
				setPermissions={formik.setFieldValue}
			/>
			{formik.errors.carAgreement && (
				<ErrorMessagePermission>
					{formik.errors.carAgreement}
				</ErrorMessagePermission>
			)}
			{formik.errors.personalDataAgreement && (
				<ErrorMessagePermission>
					{formik.errors.personalDataAgreement}
				</ErrorMessagePermission>
			)}
		</form>
	)
}

export default ReservationFormPanel
