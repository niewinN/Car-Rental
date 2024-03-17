import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useMemo,
} from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const initialLanguage = navigator.language || navigator.userLanguage
	const [userLanguage, setUserLanguage] = useState(initialLanguage)

	useEffect(() => {
		initializeLanguageFromLocalStorage()

		const handleLanguageChange = () => {
			const newUserLanguage = navigator.language || navigator.userLanguage
			setUserLanguage(newUserLanguage)
		}

		window.addEventListener("languagechange", handleLanguageChange)

		return () => {
			window.removeEventListener("languagechange", handleLanguageChange)
		}
	}, [])

	const initializeLanguageFromLocalStorage = () => {
		const savedLanguage = localStorage.getItem("userLanguage")
		const expirationDate = new Date(
			localStorage.getItem("userLanguageExpiration")
		)

		if (savedLanguage && expirationDate > new Date()) {
			setUserLanguage(savedLanguage)
		}
	}

	const setLanguage = language => {
		setUserLanguage(language)

		const expirationDate = new Date()
		expirationDate.setHours(expirationDate.getHours() + 24)

		localStorage.setItem("userLanguage", language)
		localStorage.setItem("userLanguageExpiration", expirationDate.toString())
	}
	const contextValue = useMemo(
		() => ({ userLanguage, setLanguage }),
		[userLanguage]
	)

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext).userLanguage
export const useSetLanguage = () => useContext(LanguageContext).setLanguage
