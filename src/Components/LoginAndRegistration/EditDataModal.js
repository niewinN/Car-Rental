import React, { useState } from 'react'
import { useFormik } from 'formik'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Yup from 'yup'
import axios from 'axios'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from '../../Assets/Styles/SummaryPanel/ReservationForm.styles'
import {
	EditDataModalContainer,
	EditDataHeader,
	EditDataForm,
	SaveChangesButton,
	CancelButton,
	LogoutButton,
	InputEdit,
	StyledPencilIcon,
	EditDataModalWrapper,
} from '../../Assets/Styles/LoginAndRegistration/EditDataModal.styles'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {
	ModalOverlay,
	ArrowButton,
} from '../../Assets/Styles/LoginAndRegistration/AuthModal.styles'

const EditDataModal = ({ onClose, currentUser, setCurrentUser, onLogout }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [overlayAnimation, setOverlayAnimation] = useState('fade-in')
	const modalOverlayStyle = isOpen
		? { display: 'none' }
		: { visibility: 'visible', opacity: 1 }
	const [isExpanded, setIsExpanded] = useState(false)
	const [modalAnimation, setModalAnimation] = useState('slide-in')
	const [arrowButtonAnimation, setArrowButtonAnimation] = useState('fade-in')

	const formik = useFormik({
		initialValues: {
			firstName: currentUser.firstName,
			lastName: currentUser.lastName,
			email: currentUser.email,
			phoneNumber: currentUser.phoneNumber,
		},
		validationSchema: Yup.object().shape({
			firstName: Yup.string()
				.required('Imię jest wymagane')
				.matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, 'Podaj poprawnę imię '),
			lastName: Yup.string()
				.required('Nazwisko jest wymagane')
				.matches(
					/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/,
					'Podaj poprawnę nazwisko'
				),
			// email: Yup.string()
			//     .required('E-mail jest wymagany')
			//     .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Podaj poprawny adres e-mail'),
			phoneNumber: Yup.string()
				.required('Numer telefonu jest wymagany')
				.matches(/^\+?(\d{8,15})$/, 'Podaj poprawny numer telefonu'),
		}),
		onSubmit: values => {
			const dataToSend = { ...values, id: currentUser.id }

			axios
				.patch(`http://localhost:3001/register/${currentUser.id}`, dataToSend)
				.then(response => {
					setCurrentUser(response.data)
					onClose()
				})
				.catch(error => {
					console.error('Błąd podczas aktualizacji danych użytkownika:', error)
				})
		},
	})

	const [isEditable, setIsEditable] = useState({
		firstName: false,
		lastName: false,
		email: false,
		phoneNumber: false,
		password: false,
	})

	const handleEditToggle = fieldName => {
		setIsEditable(prevState => ({
			...prevState,
			[fieldName]: !prevState[fieldName],
		}))
	}

	const handleClose = () => {
		setModalAnimation('slide-out')
		setArrowButtonAnimation('fade-out')
		setOverlayAnimation('fade-out')
		setTimeout(() => {
			setIsOpen(false)
			onClose()
		}, 300)
	}

	return (
		<ModalOverlay
			style={modalOverlayStyle}
			className={overlayAnimation}
			isOpen={isOpen}>
			<EditDataModalWrapper>
				<EditDataModalContainer
					className={modalAnimation}
					style={{
						transform: isExpanded ? 'translateX(0)' : 'translateX(100%)',
					}}>
					<EditDataHeader>Edytuj Dane</EditDataHeader>
					<CancelButton onClick={onClose}>
						<FontAwesomeIcon icon={faTimes} />
					</CancelButton>
					<EditDataForm>
						<form onSubmit={formik.handleSubmit}>
							<InputEdit
								type='text'
								name='firstName'
								placeholder='Imię'
								onChange={formik.handleChange}
								value={formik.values.firstName}
								disabled={!isEditable.firstName}
							/>
							{formik.errors.firstName && (
								<ErrorMessage>{formik.errors.firstName}</ErrorMessage>
							)}
							<StyledPencilIcon
								icon={faPencilAlt}
								onClick={() => handleEditToggle('firstName')}
							/>
							<InputEdit
								type='text'
								name='lastName'
								placeholder='Nazwisko'
								onChange={formik.handleChange}
								value={formik.values.lastName}
								disabled={!isEditable.lastName}
							/>
							{formik.errors.lastName && (
								<ErrorMessage>{formik.errors.lastName}</ErrorMessage>
							)}
							<StyledPencilIcon
								icon={faPencilAlt}
								onClick={() => handleEditToggle('lastName')}
							/>
							<InputEdit
								type='text'
								name='phoneNumber'
								placeholder='Nr telefonu'
								onChange={formik.handleChange}
								value={formik.values.phoneNumber}
								disabled={!isEditable.phoneNumber}
							/>
							{formik.errors.phoneNumber && (
								<ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
							)}
							<StyledPencilIcon
								icon={faPencilAlt}
								onClick={() => handleEditToggle('phoneNumber')}
							/>
							<InputEdit
								type='email'
								name='email'
								placeholder='Email'
								onChange={formik.handleChange}
								value={formik.values.email}
								disabled={true}
							/>
							<SaveChangesButton type='submit'>Zapisz</SaveChangesButton>
							<LogoutButton onClick={onLogout}>Wyloguj</LogoutButton>
						</form>
					</EditDataForm>
				</EditDataModalContainer>
				<ArrowButton className={arrowButtonAnimation} onClick={handleClose}>
					<FontAwesomeIcon icon={faAnglesDown} />
				</ArrowButton>
			</EditDataModalWrapper>
		</ModalOverlay>
	)
}

export default EditDataModal
