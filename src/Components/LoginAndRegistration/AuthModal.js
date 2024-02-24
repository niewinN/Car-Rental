import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
	faGoogle,
	faMicrosoft,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ErrorMessage } from '../../Assets/Styles/SummaryPanel/ReservationForm.styles'
import SuccessModal from '../../Layouts/UI/SuccessModal'
import { useUserData } from '../../Contexts/UserDataContext'
// import useFacebookLogin from '../../Services/LoginServices/facebookAuth'
// import useGoogleLogin from '../../Services/LoginServices/googleAuth'
// import useMicrosoftLogin from '../../Services/LoginServices/microsoftAuth'
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
} from '../../Assets/Styles/LoginAndRegistration/AuthModal.styles'

const AuthModal = ({ onClose, setCurrentUser }) => {
	const [isLogin, setIsLogin] = useState(true)

	const [isExpanded, setIsExpanded] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [emailError, setEmailError] = useState('')
	const [loginError, setLoginError] = useState('')
	const [arrowButtonAnimation, setArrowButtonAnimation] = useState('fade-in')

	const [isOpen, setIsOpen] = useState(false)
	const [modalAnimation, setModalAnimation] = useState('slide-in')
	const [overlayAnimation, setOverlayAnimation] = useState('fade-in')
	const { setUserData } = useUserData()
	// const { user, initiateLogin } = useFacebookLogin()
	// // const { initiateGoogleLogin } = useGoogleLogin();
	// const { googleUser, initiateGoogleLogin } = useGoogleLogin()
	// const { microsoftUser, initiateMicrosoftLogin } = useMicrosoftLogin()

	// REJESTRACJA - JEŚLI EMAIL ISTNIEJE TO BŁĄD
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: isLogin
			? Yup.object({
					email: Yup.string()
						.required('E-mail jest wymagany')
						.matches(
							/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							'Podaj poprawny adres e-mail'
						),
					password: Yup.string().required('Hasło jest wymagane'),
			  })
			: Yup.object().shape({
					firstName: Yup.string()
						.required('Imię jest wymagane')
						.matches(
							/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/,
							'Podaj poprawnę imię '
						),
					lastName: Yup.string()
						.required('Nazwisko jest wymagane')
						.matches(
							/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/,
							'Podaj poprawnę nazwisko'
						),
					email: Yup.string()
						.required('E-mail jest wymagany')
						.matches(
							/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							'Podaj poprawny adres e-mail'
						),
					phoneNumber: Yup.string()
						.required('Numer telefonu jest wymagany')
						.matches(/^\+?(\d{8,15})$/, 'Podaj poprawny numer telefonu'),
					password: Yup.string()
						.required('Hasło jest wymagane')
						.min(6, 'Hasło musi zawierać min. 6 znaków')
						.matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
							'Hasło musi zawierać (duża i mała litera, cyfra, znak specjalny)'
						),
					confirmPassword: Yup.string()
						.required('Powtórzenie hasła jest wymagane')
						.oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same'),
			  }),
		onSubmit: values => {
			setUserData(values)
			console.log('Formik onSubmit called', values)
			if (!isLogin) {
				axios
					.get(`http://localhost:3001/register?email=${values.email}`)
					.then(response => {
						if (response.data.length > 0) {
							setEmailError('E-mail jest już zajęty')
						} else {
							// axios.post('http://localhost:3001/register', values)
							axios
								.post('http://localhost:3001/register', {
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
									alert('Błąd podczas rejestracji')
								})
						}
					})
					.catch(error => {
						alert('Błąd podczas sprawdzania adresu e-mail')
					})
			} else {
				console.log('Attempting login...')
				handleLogin(values.email, values.password)
			}
		},

		validateOnChange: false,
		validateOnBlur: true,
	})

	const handleClose = () => {
		setIsModalOpen(true) // przeniesione na początek
		setModalAnimation('slide-out')
		setArrowButtonAnimation('fade-out')
		setOverlayAnimation('fade-out')
		// setTimeout(() => {
		//     setIsOpen(false);
		//     onClose();
		// }, 5000);
	}

	const slideClose = () => {
		setModalAnimation('slide-out')
		setArrowButtonAnimation('fade-out')
		setOverlayAnimation('fade-out')
		setTimeout(() => {
			setIsOpen(false)
			onClose()
		}, 300)
	}

	//ZWYKŁE LOGOWANIE
	const handleLogin = (email, password) => {
		console.log('Login with:', email, password)
		axios
			.get('http://localhost:3001/register')
			.then(response => {
				console.log('Server response:', response.data)
				const user = response.data.find(
					user => user.email === email && user.password === password
				)
				if (user) {
					setCurrentUser(user)
					console.log('Successfully logged in:', user)
					handleClose()
					const loginTime = new Date().getTime()
					localStorage.setItem('loginTime', loginTime)
					localStorage.setItem('currentUser', JSON.stringify(user))
				} else {
					setLoginError('E-mail lub hasło jest nieprawidłowe.')
				}
			})
			.catch(error => {
				console.error('Błąd podczas próby logowania:', error)
				setLoginError('Błąd podczas logowania, spróbuj ponownie później.')
			})
	}

	// useEffect(() => {
	//     let timer;
	//     if (isModalOpen) {
	//         timer = setTimeout(() => {
	//             setIsModalOpen(false);
	//         }, 5000);
	//     }

	//     return () => clearTimeout(timer);
	// }, [isModalOpen]);

	const switchToLogin = () => {
		formik.setValues({
			...formik.values,
			email: '',
			password: '',
		})
		setIsLogin(true)
	}

	const switchToRegistration = () => {
		formik.setValues({
			...formik.values,
			email: '',
			password: '',
			confirmPassword: '',
		})
		setIsLogin(false)
	}

	const modalOverlayStyle = isOpen
		? { display: 'none' }
		: { visibility: 'visible', opacity: 1 }
	// //FACEBOOK
	//     useEffect(() => {
	//         if (user) {
	//             const { email, name } = user;

	//             axios.get(`http://localhost:3001/register?email=${email}`)
	//                 .then(response => {
	//                     if (response.data.length > 0) {
	//                         setCurrentUser(response.data[0]);
	//                         const loginTime = new Date().getTime();
	//                         localStorage.setItem('loginTime', loginTime);
	//                     // localStorage.setItem('currentUser', JSON.stringify(user));  // zakładając, że pierwszy element to nasz użytkownik
	//                         localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
	//                     } else {
	//                         const newUser = {
	//                             firstName: name.split(" ")[0],
	//                             lastName: name.split(" ")[1],
	//                             email: email,
	//                         };
	//                         axios.post('http://localhost:3001/register', newUser)
	//                             .then(response => {
	//                                 setCurrentUser(response.data);
	//                                 localStorage.setItem('currentUser', JSON.stringify(response.data));
	//                             })
	//                             .catch(error => {
	//                                 console.error('Błąd podczas rejestracji użytkownika z Facebooka:', error);
	//                             });
	//                     }
	//                 })
	//                 .catch(error => {
	//                     console.error('Błąd podczas sprawdzania adresu e-mail:', error);
	//                 });
	//         }
	//     }, [user]);

	//     useEffect(() => {
	//         const savedUser = localStorage.getItem('currentUser');
	//         if (savedUser) {
	//             setCurrentUser(JSON.parse(savedUser));
	//         }
	//     }, []);

	// //GOOGLE
	//     useEffect(() => {
	//         if (googleUser) {
	//             const { email, name } = googleUser;

	//             axios.get(`http://localhost:3001/register?email=${email}`)
	//                 .then(response => {
	//                     if (response.data.length > 0) {
	//                         setCurrentUser(response.data[0]);
	//                         const loginTime = new Date().getTime();
	//                         localStorage.setItem('loginTime', loginTime);
	//                         localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
	//                     } else {
	//                         const newUser = {
	//                             firstName: name.split(" ")[0],
	//                             lastName: name.split(" ")[1],
	//                             email: email,
	//                         };
	//                         axios.post('http://localhost:3001/register', newUser)
	//                             .then(response => {
	//                                 setCurrentUser(response.data);
	//                                 localStorage.setItem('currentUser', JSON.stringify(response.data));
	//                             })
	//                             .catch(error => {
	//                                 console.error('Błąd podczas rejestracji użytkownika z Google:', error);
	//                             });
	//                     }
	//                 })
	//                 .catch(error => {
	//                     console.error('Błąd podczas sprawdzania adresu e-mail:', error);
	//                 });
	//         }
	//     }, [googleUser]);

	// // MICROSOFT
	// useEffect(() => {
	//   console.log('Wartość microsoftUser:', microsoftUser);

	//   if (microsoftUser) {
	//     const { mail, displayName } = microsoftUser;

	//     if (mail && displayName) {
	//       axios.get(`http://localhost:3001/register?email=${mail}`)
	//         .then(response => {
	//           console.log('Microsoft:', response);
	//           if (response.data.length > 0) {
	//             setCurrentUser(response.data[0]);
	//             const loginTime = new Date().getTime();
	//             localStorage.setItem('loginTime', loginTime);
	//             localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
	//           } else {
	//             const newUser = {
	//               firstName: displayName.split(" ")[0],
	//               lastName: displayName.split(" ")[1] || '', // Może nie być nazwiska
	//               email: mail,
	//             };
	//             axios.post('http://localhost:3001/register', newUser)
	//               .then(response => {
	//                 setCurrentUser(response.data);
	//                 localStorage.setItem('currentUser', JSON.stringify(response.data));
	//               })
	//               .catch(error => {
	//                 console.error('Błąd podczas rejestracji użytkownika z Microsofta:', error);
	//               });
	//           }
	//         })
	//         .catch(error => {
	//           console.error('Błąd podczas sprawdzania adresu e-mail:', error);
	//         });
	//     } else {
	//       console.error('Brak wymaganych danych użytkownika z Microsofta.');
	//     }
	//   }
	// }, [microsoftUser]);

	return (
		<>
			<ModalOverlay
				style={modalOverlayStyle}
				className={overlayAnimation}
				isOpen={isOpen}>
				<AuthModalWrapper>
					<AuthModalContainer
						className={modalAnimation}
						style={{
							transform: isExpanded ? 'translateX(0)' : 'translateX(100%)',
						}}>
						<AuthModalContent>
							<TabContainer>
								<SubmitButton active={isLogin} onClick={switchToLogin}>
									Zaloguj
								</SubmitButton>
								<SubmitButton active={!isLogin} onClick={switchToRegistration}>
									Zarejestruj
								</SubmitButton>
							</TabContainer>
							<WelcomeText>
								{isLogin
									? 'Witaj w CAR RENTAL'
									: 'Dołącz do naszej społeczności CAR RENTAL'}
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
												placeholder='Hasło'
												onChange={formik.handleChange}
												value={formik.values.password}
											/>
											{formik.errors.password && (
												<ErrorMessage>{formik.errors.password}</ErrorMessage>
											)}
											{loginError && <ErrorMessage>{loginError}</ErrorMessage>}
											<TabButton type='submit'>Zaloguj się</TabButton>
										</>
									) : (
										<>
											<Input
												type='text'
												name='firstName'
												placeholder='Imię'
												onChange={formik.handleChange}
												value={formik.values.firstName}
											/>
											{formik.errors.firstName && (
												<ErrorMessage>{formik.errors.firstName}</ErrorMessage>
											)}
											<Input
												type='text'
												name='lastName'
												placeholder='Nazwisko'
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
												placeholder='Nr telefonu'
												onChange={formik.handleChange}
												value={formik.values.phoneNumber}
											/>
											{formik.errors.phoneNumber && (
												<ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
											)}
											<Input
												type='password'
												name='password'
												placeholder='Hasło'
												onChange={formik.handleChange}
												value={formik.values.password}
											/>
											{formik.errors.password && (
												<ErrorMessage>{formik.errors.password}</ErrorMessage>
											)}
											<Input
												type='password'
												name='confirmPassword'
												placeholder='Powtórz hasło'
												onChange={formik.handleChange}
												value={formik.values.confirmPassword}
											/>
											{formik.errors.confirmPassword && (
												<ErrorMessage>
													{formik.errors.confirmPassword}
												</ErrorMessage>
											)}
											<TabButton type='submit'>Zarejestruj się</TabButton>
										</>
									)}
								</form>
							</FormContainer>
							<StyledIconText>Kontynuuj jednym kliknięciem!</StyledIconText>
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
				isOpen={isModalOpen}
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
