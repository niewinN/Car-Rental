import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faFacebookF,
	faGoogle,
	faMicrosoft,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { ErrorMessage } from "../../assets/Styles/SummaryPanel/ReservationForm.styles"
import SuccessModal from "../../layouts/UI/SuccessModal"
import { useUserData } from "../../contexts/UserDataContext"

import {
	ModalOverlay,
	AuthModalWrapper,
	AuthModalContent,
	AuthModalContainer,
	Input,
	TabContainer,
	SubmitButton,
	TabButton,
	WelcomeText,
	ArrowButton,
	FormContainer,
	StyledIconText,
	SocialIcon,
	SocialIconContainer,
	SocialIconsContainer,
} from "../../assets/Styles/LoginAndRegistration/AuthModal.styles"
import { useTranslation } from "react-i18next"

const AuthModal = ({ onClose, setCurrentUser }) => {
	const [isLogin, setIsLogin] = useState(true)
	const { t } = useTranslation()

	const [isExpanded, setIsExpanded] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [emailError, setEmailError] = useState("")
	const [loginError, setLoginError] = useState("")
	const [arrowButtonAnimation, setArrowButtonAnimation] = useState("fade-in")

	const [isOpen, setIsOpen] = useState(false)
	const [modalAnimation, setModalAnimation] = useState("slide-in")
	const [overlayAnimation, setOverlayAnimation] = useState("fade-in")
	const { setUserData } = useUserData()

	// REJESTRACJA - JEŚLI EMAIL ISTNIEJE TO BŁĄD
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: isLogin
			? Yup.object({
					email: Yup.string()
						.required(t("emailRequired"))
						.matches(
							/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							t("validEmail")
						),
					password: Yup.string().required(t("passwordRequired")),
			  })
			: Yup.object().shape({
					firstName: Yup.string()
						.required(t("firstNameRequired"))
						.matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, t("validFirstName")),
					lastName: Yup.string()
						.required(t("lastNameRequired"))
						.matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, t("validLastName")),
					email: Yup.string()
						.required(t("emailRequired"))
						.matches(
							/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							t("validEmail")
						),
					phoneNumber: Yup.string()
						.required(t("phoneRequired"))
						.matches(/^\+?(\d{8,15})$/, t("validPhone")),
					password: Yup.string()
						.required(t("passwordRequired"))
						.min(6, t("passwordMin"))
						.matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
							t("passwordRequirements")
						),
					confirmPassword: Yup.string()
						.required(t("passwordRepeat"))
						.oneOf([Yup.ref("password"), null], t("passwordsMustMatch")),
			  }),
		onSubmit: values => {
			setUserData(values)
			console.log("Formik onSubmit called", values)
			if (!isLogin) {
				axios
					.get(`http://localhost:3001/register?email=${values.email}`)
					.then(response => {
						if (response.data.length > 0) {
							setEmailError("E-mail jest już zajęty")
						} else {
							// axios.post('http://localhost:3001/register', values)
							axios
								.post("http://localhost:3001/register", {
									...values,
									update: false,
								})
								.then(response => {
									// console.log("Przed ustawieniem isModalOpen: ", isModalOpen);
									handleClose()
									// setIsModalOpen(true);
									// handleClose();
									// console.log("Po ustawieniu isModalOpen: ", isModalOpen);
								})
								.catch(error => {
									alert("Błąd podczas rejestracji")
								})
						}
					})
					.catch(error => {
						alert("Błąd podczas sprawdzania adresu e-mail")
					})
			} else {
				console.log("Attempting login...")
				handleLogin(values.email, values.password)
			}
		},

		validateOnChange: false,
		validateOnBlur: true,
	})

	const handleClose = () => {
		setIsModalOpen(true) // przeniesione na początek
		setModalAnimation("slide-out")
		setArrowButtonAnimation("fade-out")
		setOverlayAnimation("fade-out")
		// setTimeout(() => {
		//     setIsOpen(false);
		//     onClose();
		// }, 5000);
	}

	const slideClose = () => {
		setModalAnimation("slide-out")
		setArrowButtonAnimation("fade-out")
		setOverlayAnimation("fade-out")
		setTimeout(() => {
			setIsOpen(false)
			onClose()
		}, 300)
	}

	//ZWYKŁE LOGOWANIE
	const handleLogin = (email, password) => {
		console.log("Login with:", email, password)
		axios
			.get("http://localhost:3001/register")
			.then(response => {
				console.log("Server response:", response.data)
				const user = response.data.find(
					user => user.email === email && user.password === password
				)
				if (user) {
					setCurrentUser(user)
					console.log("Successfully logged in:", user)
					handleClose()
					const loginTime = new Date().getTime()
					localStorage.setItem("loginTime", loginTime)
					localStorage.setItem("currentUser", JSON.stringify(user))
				} else {
					setLoginError(t("loginError"))
				}
			})
			.catch(error => {
				console.error(t("loginAttemptError"), error)
				setLoginError(t("loginAttemptError"))
			})
	}

	const switchToLogin = () => {
		formik.setValues({
			...formik.values,
			email: "",
			password: "",
		})
		setIsLogin(true)
	}

	const switchToRegistration = () => {
		formik.setValues({
			...formik.values,
			email: "",
			password: "",
			confirmPassword: "",
		})
		setIsLogin(false)
	}

	const modalOverlayStyle = isOpen
		? { display: "none" }
		: { visibility: "visible", opacity: 1 }

	return (
		<>
			<ModalOverlay
				style={modalOverlayStyle}
				className={overlayAnimation}
				$isOpen={isOpen}>
				<AuthModalWrapper>
					<AuthModalContainer
						className={modalAnimation}
						style={{
							transform: isExpanded ? "translateX(0)" : "translateX(100%)",
						}}>
						<AuthModalContent>
							<TabContainer>
								<SubmitButton $active={isLogin} onClick={switchToLogin}>
									{t("login.login")}
								</SubmitButton>
								<SubmitButton $active={!isLogin} onClick={switchToRegistration}>
									{t("login.registration")}
								</SubmitButton>
							</TabContainer>
							<WelcomeText>
								{isLogin ? t("welcomeMessage") : t("joinCommunity")}
							</WelcomeText>
							<FormContainer>
								<form onSubmit={formik.handleSubmit}>
									{isLogin ? (
										<>
											<Input
												type='email'
												name='email'
												placeholder='Email'
												onChange={formik.handleChange}
												value={formik.values.email}
											/>
											{formik.errors.email && (
												<ErrorMessage>{formik.errors.email}</ErrorMessage>
											)}
											<Input
												type='password'
												name='password'
												placeholder={t("auth.password")}
												onChange={formik.handleChange}
												value={formik.values.password}
											/>
											{formik.errors.password && (
												<ErrorMessage>{formik.errors.password}</ErrorMessage>
											)}
											{loginError && <ErrorMessage>{loginError}</ErrorMessage>}
											<TabButton type='submit'>{t("login.login")}</TabButton>
										</>
									) : (
										<>
											<Input
												type='text'
												name='firstName'
												placeholder={t("auth.name")}
												onChange={formik.handleChange}
												value={formik.values.firstName}
											/>
											{formik.errors.firstName && (
												<ErrorMessage>{formik.errors.firstName}</ErrorMessage>
											)}
											<Input
												type='text'
												name='lastName'
												placeholder={t("auth.surname")}
												onChange={formik.handleChange}
												value={formik.values.lastName}
											/>
											{formik.errors.lastName && (
												<ErrorMessage>{formik.errors.lastName}</ErrorMessage>
											)}
											<Input
												type='email'
												name='email'
												placeholder='Email'
												onChange={formik.handleChange}
												value={formik.values.email}
											/>
											{formik.errors.email && (
												<ErrorMessage>{formik.errors.email}</ErrorMessage>
											)}
											{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
											<Input
												type='text'
												name='phoneNumber'
												placeholder={t("auth.phone")}
												onChange={formik.handleChange}
												value={formik.values.phoneNumber}
											/>
											{formik.errors.phoneNumber && (
												<ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
											)}
											<Input
												type='password'
												name='password'
												placeholder={t("auth.password")}
												onChange={formik.handleChange}
												value={formik.values.password}
											/>
											{formik.errors.password && (
												<ErrorMessage>{formik.errors.password}</ErrorMessage>
											)}
											<Input
												type='password'
												name='confirmPassword'
												placeholder={t("auth.passwordRepeat")}
												onChange={formik.handleChange}
												value={formik.values.confirmPassword}
											/>
											{formik.errors.confirmPassword && (
												<ErrorMessage>
													{formik.errors.confirmPassword}
												</ErrorMessage>
											)}
											<TabButton type='submit'>
												{t("login.registration")}
											</TabButton>
										</>
									)}
								</form>
							</FormContainer>
							<StyledIconText>{t("oneClick")}</StyledIconText>
							<SocialIconsContainer>
								<SocialIconContainer>
									<SocialIcon icon={faFacebookF} />
								</SocialIconContainer>
								<SocialIconContainer>
									<SocialIcon icon={faGoogle} />
								</SocialIconContainer>
								<SocialIconContainer>
									<SocialIcon icon={faMicrosoft} />
								</SocialIconContainer>
								<SocialIconContainer>
									<SocialIcon icon={faTwitter} />
								</SocialIconContainer>
							</SocialIconsContainer>
						</AuthModalContent>
					</AuthModalContainer>
					<ArrowButton className={arrowButtonAnimation} onClick={slideClose}>
						<FontAwesomeIcon icon={faAnglesDown} />
					</ArrowButton>
				</AuthModalWrapper>
			</ModalOverlay>
			<SuccessModal
				$isOpen={isModalOpen}
				onRequestClose={() => {
					setIsModalOpen(false)
					setIsOpen(false) // Możesz też chcieć zresetować ten stan
					onClose()
				}}
				children='Zarejestrowano pomyślnie! Na twój adres e-mail wysłaliśmy link weryfikacyjny'
				// $position='top-right'
			/>
		</>
	)
}

export default AuthModal
