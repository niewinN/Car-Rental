import React, { useState } from "react"
import {
	ContactFormBox,
	ContactFormBtn,
	ContactFormInput,
	ContactFormLabel,
	ContactFormPanel,
	ContactFormTextarea,
	ContactFormTitle,
	ContactFormWrapper,
} from "../../assets/Styles/Contact/ContactForm.styles"
import SuccessModal from "../../layouts/UI/SuccessModal"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import theme from "../../assets/Styles/theme"

function ContactForm() {
	const { t } = useTranslation()

	const [isModalOpen, setIsModalOpen] = useState(false)
	// const [modalContent, setModalContent] = useState('');
	const [modalContent, setModalContent] = useState({ type: "", message: "" })

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [buttonPressed, setButtonPressed] = useState(false)

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required(t("validation.requiredName"))
			.min(2, t("validation.shortName"))
			.max(100, t("validation.longName"))
			.matches(
				/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/,
				t("validation.invalidName")
			),
		phoneNumber: Yup.string()
			.required(t("validation.requiredPhone"))
			.matches(/^\+?(\d{8,15})$/, t("validation.invalidPhone")),
		email: Yup.string()
			.required(t("validation.requiredEmail"))
			.min(5, t("validation.shortEmail"))
			.max(320, t("validation.longEmail"))
			.matches(
				/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
				t("validation.invalidEmail")
			),
		subject: Yup.string()
			.required(t("validation.requiredSubject"))
			.min(3, t("validation.shortSubject"))
			.max(150, t("validation.longSubject")),
		message: Yup.string()
			.required(t("validation.requiredMessage"))
			.min(5, t("validation.shortMessage"))
			.max(2000, t("validation.longMessage")),
	})

	const formik = useFormik({
		initialValues: {
			name: "",
			phoneNumber: "",
			email: "",
			subject: "",
			message: "",
		},
		validationSchema,
		onSubmit: values => {
			setIsModalOpen(true)
			// setModalContent(t('toastFormSuccess'));
			setModalContent({ type: "success", message: t("toastFormSuccess") })
			setIsSubmitting(false)
		},
	})

	const handleFormSubmit = async event => {
		event.preventDefault()

		if (buttonPressed) return

		setIsSubmitting(true)
		setButtonPressed(true)

		const errors = await formik.validateForm()
		let errorMessage = ""
		if (Object.keys(errors).length > 0) {
			// errorMessage = 'Wypełnij poprawnie formularz:\n';
			for (let key in errors) {
				errorMessage += "- " + errors[key] + "\n"
			}
			setIsModalOpen(true)
			setModalContent({ type: "error", message: errorMessage })
			setIsSubmitting(false)
		} else {
			formik.handleSubmit()
		}

		setTimeout(() => setButtonPressed(false), 3000)
	}

	return (
		<ContactFormWrapper>
			<ContactFormPanel onSubmit={handleFormSubmit} noValidate>
				<ContactFormTitle>{t("formTitle")}</ContactFormTitle>
				<ContactFormBox>
					<ContactFormLabel htmlFor='name'>{t("labels.name")}</ContactFormLabel>
					<ContactFormInput
						type='text'
						id='name'
						name='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</ContactFormBox>
				<ContactFormBox>
					<ContactFormLabel htmlFor='phoneNumber'>
						{t("labels.phoneNumber")}
					</ContactFormLabel>
					<ContactFormInput
						type='tel'
						id='phoneNumber'
						name='phoneNumber'
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</ContactFormBox>
				<ContactFormBox>
					<ContactFormLabel htmlFor='email'>
						{t("labels.email")}
					</ContactFormLabel>
					<ContactFormInput
						type='email'
						id='email'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</ContactFormBox>
				<ContactFormBox>
					<ContactFormLabel htmlFor='subject'>
						{t("labels.subject")}
					</ContactFormLabel>
					<ContactFormInput
						type='text'
						id='subject'
						name='subject'
						value={formik.values.subject}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</ContactFormBox>
				<ContactFormBox>
					<ContactFormLabel htmlFor='message'>
						{t("labels.message")}
					</ContactFormLabel>
					<ContactFormTextarea
						id='message'
						name='message'
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</ContactFormBox>
				<ContactFormBox>
					<ContactFormBtn type='submit' disabled={isSubmitting}>
						{t("labels.submitButton")}
					</ContactFormBtn>
				</ContactFormBox>
			</ContactFormPanel>

			<SuccessModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				height='300px'
				icon={modalContent.type === "error" ? "x" : "check"}>
				{modalContent.type === "error" && <p>Wypełnij poprawnie formularz:</p>}
				{modalContent.message
					.split("\n")
					.filter(msg => msg)
					.map((line, index) => (
						<p
							key={index}
							style={
								modalContent.type === "error" &&
								line !== "Wypełnij poprawnie formularz:"
									? { color: `${theme.colors.primary}`, fontSize: "1.2rem" }
									: {}
							}>
							{line}
						</p>
					))}
			</SuccessModal>
		</ContactFormWrapper>
	)
}

export default ContactForm
