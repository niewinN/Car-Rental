import React, { useState, useEffect } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {
	Nav,
	NavLink,
	StyledContainer,
	NavContainer,
	NavLogo,
	NavLogoName,
	NavLogoText,
	NavLogin,
	NavRight,
	BurgerLine,
	BurgerIcon,
	NavList,
	NavLoginText,
	NavFontAwesomeIcon,
} from '../../Assets/Styles/Navigation/Navigation.styles'
import { useTranslation } from 'react-i18next'
import AuthModal from '../../Components/LoginAndRegistration/AuthModal'
import EditDataModal from '../../Components/LoginAndRegistration/EditDataModal'
import { useUserData } from '../../Contexts/UserDataContext'

const Navigation = () => {
	const [showNav, setShowNav] = useState(false)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)

	const [currentUser, setCurrentUser] = useState(null)
	const { userData } = useUserData()

	const handleClick = () => {
		setShowNav(!showNav)
	}

	const handleScroll = () => {
		if (window.scrollY > 10) {
			setIsScrolling(true)
		} else {
			setIsScrolling(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleNavLoginClick = () => {
		if (currentUser) {
			setIsEditModalOpen(true)
		} else {
			setIsAuthModalOpen(true)
		}
	}

	const handleCloseModal = () => {
		setIsAuthModalOpen(false)
		setIsEditModalOpen(false)
	}

	const handleUpdate = updatedUser => {
		setCurrentUser(updatedUser)
		setIsEditModalOpen(false)
	}

	const { t } = useTranslation()

	const menuItems = [
		{ name: t('nav.reservation'), path: 'reservation' },
		{ name: t('nav.flota'), path: 'fleet' },
		{ name: 'FAQ', path: 'faq' },
		{ name: t('nav.contact'), path: 'contact' },
	]

	useEffect(() => {
		const loginTime = localStorage.getItem('loginTime')
		const currentTime = new Date().getTime()

		if (currentTime - loginTime > 3600000) {
			localStorage.removeItem('loginTime')
			localStorage.removeItem('currentUser')
			setCurrentUser(null)
		} else {
			const storedUser = JSON.parse(localStorage.getItem('currentUser'))
			setCurrentUser(storedUser)
		}
	}, [])

	const handleLogout = () => {
		localStorage.removeItem('loginTime')
		localStorage.removeItem('currentUser')
		setCurrentUser(null)
		setIsEditModalOpen(false)
		setIsAuthModalOpen(false)
	}

	return (
		<NavContainer isScrolling={isScrolling}>
			<StyledContainer>
				<Nav>
					<NavLogo>
						<NavLogoName href='/'>CAR RENTAL</NavLogoName>
						<NavLogoText>{t('nav.subTitle')}</NavLogoText>
					</NavLogo>

					<NavList $showNav={showNav}>
						{menuItems.map((item, index) => (
							<li key={index}>
								<NavLink
									to={`/${item.path}`}
									onClick={handleClick}
									$isFirst={index === 0}>
									{item.name}
								</NavLink>
							</li>
						))}
					</NavList>

					<NavRight>
						<NavLogin $showNav={showNav} onClick={handleNavLoginClick}>
							<NavFontAwesomeIcon icon={faUser} />
							<NavLoginText>
								{currentUser ? `${currentUser.firstName}` : t('nav.login')}
							</NavLoginText>
						</NavLogin>
						<BurgerIcon onClick={handleClick} $isExpanded={showNav}>
							{[1, 2, 3].map(num => (
								<BurgerLine key={num} className={showNav ? 'active' : ''} />
							))}
						</BurgerIcon>
					</NavRight>
					{isEditModalOpen && currentUser && (
						<EditDataModal
							currentUser={currentUser}
							onUpdate={handleUpdate}
							onClose={handleCloseModal}
							onLogout={handleLogout}
							userData={userData}
							setCurrentUser={setCurrentUser}
						/>
					)}
					{isAuthModalOpen && !currentUser && (
						<AuthModal
							onClose={handleCloseModal}
							setCurrentUser={setCurrentUser}
						/>
					)}
				</Nav>
			</StyledContainer>
		</NavContainer>
	)
}

export default Navigation
