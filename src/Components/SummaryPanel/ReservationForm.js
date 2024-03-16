import React, { useState } from "react"
import {
	FormContainer,
	FormBox,
	Section,
	LabelNip,
	Title,
	Label,
	Input,
	LabelNipLink,
	ErrorMessage,
	CheckboxContainer,
	CompanyCheckbox,
	CheckboxLabel,
} from "../../assets/Styles/SummaryPanel/ReservationForm.styles"
import { useTranslation } from "react-i18next"
import fetchCompanyData from "../../services/CompanyDataFetcher"

const ReservationForm = ({ form, setForm, errors, fillUserData }) => {
	const { t } = useTranslation()

	const [nipErrorMessage, setNipErrorMessage] = useState("")

	const handleChange = (name, value) => {
		setForm(name, value)
	}

	const handleFetchCompanyData = async e => {
		e.preventDefault()
		setNipErrorMessage("")

		if (form.nip) {
			try {
				const companyData = await fetchCompanyData(form.nip)

				if (
					!companyData.subject ||
					companyData.subject.statusVat !== "Czynny" ||
					(!companyData.subject.residenceAddress &&
						!companyData.subject.workingAddress)
				) {
					throw new Error("Expected data fields not present")
				}

				let addressParts

				if (companyData.subject.residenceAddress) {
					addressParts = companyData.subject.residenceAddress.split(", ")
					if (addressParts.length !== 2 && companyData.subject.workingAddress) {
						addressParts = companyData.subject.workingAddress.split(", ")
					}
				} else if (companyData.subject.workingAddress) {
					addressParts = companyData.subject.workingAddress.split(", ")
				}

				if (!addressParts || addressParts.length !== 2) {
					throw new Error("Unexpected address format")
				}

				const cityZipParts = addressParts[1].split(" ")

				if (cityZipParts.length !== 2) {
					throw new Error("Unexpected city and zip format")
				}

				setForm("regon", companyData.subject.regon)
				setForm("streetNr", addressParts[0])
				setForm("city", cityZipParts[1])
				setForm("zipCode", cityZipParts[0])
				setForm("country", "Polska")
			} catch (error) {
				console.error(error)
				setNipErrorMessage(t("errorNip"))
			}
		}
	}

	return (
		<FormContainer>
			<FormBox>
				<Section>
					<Title>{t("reservationForm.title.id")}</Title>
					<CheckboxContainer>
						<CompanyCheckbox
							type='checkbox'
							checked={form.isCompany}
							onChange={() => setForm("isCompany", !form.isCompany)}
							id='isCompanyCheckbox'
						/>
						<CheckboxLabel htmlFor='isCompanyCheckbox'>
							{t("reservationForm.company")}
						</CheckboxLabel>
					</CheckboxContainer>
					<Label>{t("reservationForm.name")}</Label>
					<Input
						type='text'
						name='nameSurname'
						value={form.nameSurname || ""}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.nameSurname && (
						<ErrorMessage>{errors.nameSurname}</ErrorMessage>
					)}

					<Label>{t("reservationForm.phone")}</Label>
					<Input
						type='tel'
						name='phoneNumber'
						value={form.phoneNumber}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.phoneNumber && (
						<ErrorMessage>{errors.phoneNumber}</ErrorMessage>
					)}

					<Label>E-mail:</Label>
					<Input
						type='email'
						name='email'
						value={form.email}
						onChange={e => handleChange(e.target.name, e.target.value)}
						onBlur={fillUserData}
					/>
					{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

					<Label>{t("reservationForm.id-card-licence")}</Label>
					<Input
						type='text'
						name='driveNr'
						value={form.driveNr}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.driveNr && <ErrorMessage>{errors.driveNr}</ErrorMessage>}

					{form.isCompany && (
						<>
							<LabelNip>
								{t("reservationForm.nip")}
								<LabelNipLink onClick={handleFetchCompanyData}>
									{t("reservationForm.fetchCompanyData")}
								</LabelNipLink>
							</LabelNip>
							<Input
								type='text'
								name='nip'
								value={form.nip}
								onChange={e => handleChange(e.target.name, e.target.value)}
							/>
							{errors.nip && <ErrorMessage>{errors.nip}</ErrorMessage>}
							{nipErrorMessage && (
								<ErrorMessage>{nipErrorMessage}</ErrorMessage>
							)}

							<Label>{t("reservationForm.regon")}</Label>
							<Input
								type='text'
								name='regon'
								value={form.regon}
								onChange={e => handleChange(e.target.name, e.target.value)}
							/>
							{errors.regon && <ErrorMessage>{errors.regon}</ErrorMessage>}
						</>
					)}
				</Section>

				<Section>
					<Title>{t("reservationForm.title.address")}</Title>
					<Label>{t("reservationForm.address")}</Label>
					<Input
						type='text'
						name='streetNr'
						value={form.streetNr}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.streetNr && <ErrorMessage>{errors.streetNr}</ErrorMessage>}

					<Label>{t("reservationForm.zip-code")}</Label>
					<Input
						type='text'
						name='zipCode'
						value={form.zipCode}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}

					<Label>{t("reservationForm.City")}</Label>
					<Input
						type='text'
						name='city'
						value={form.city}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}

					<Label>{t("reservationForm.Country")}</Label>
					<Input
						type='text'
						name='country'
						value={form.country}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					{errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
				</Section>
			</FormBox>
		</FormContainer>
	)
}

export default ReservationForm
