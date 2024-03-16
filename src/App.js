import "./App.css"
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import Navigation from "./Layouts/Navigation/Navigation"
import Reservation from "./Pages/Reservation"
import Fleet from "./Pages/Fleet"
import Faq from "./Pages/Faq"
import Contact from "./Pages/Contact"
import Summary from "./Pages/Summary"
import Footer from "./Layouts/Footer/Footer"
import Container from "./Components/Container/Container"
import Main from "./Layouts/Main/Main"
import { FilterProvider } from "./Contexts/FilterContext"
import { DateProvider } from "./Contexts/DateContext"
import { ReservedCarsProvider } from "./Contexts/ReservedCarsContext"
import { RefundProvider } from "./Contexts/RefundContext"
import { SelectCityProvider } from "./Layouts/Main/CarSearch/ReservationContext/SelectCityContext"
import CookiePopup from "./Layouts/UI/CookiePopup"
import { RefundCityProvider } from "./Layouts/Main/CarSearch/ReservationContext/RefundCityContext"
import { UserProvider } from "./Contexts/UserContext"
import { UserDataProvider } from "./Contexts/UserDataContext"
import {
	LanguageProvider,
	useLanguage,
} from "./Layouts/Main/CarSearch/BarSearch/ReservationSearch/LanguageContext"
import initI18n from "./config/i18nConfig"
import { I18nextProvider } from "react-i18next"
import { useEffect } from "react"

function App() {
	const userLanguage = useLanguage()

	useEffect(() => {
		initI18n.changeLanguage(userLanguage)
	}, [userLanguage])
	return (
		<>
			<I18nextProvider i18n={initI18n}>
				<BrowserRouter>
					<UserDataProvider>
						<Navigation />
						<Container>
							<UserProvider>
								<RefundProvider>
									<RefundCityProvider>
										<SelectCityProvider>
											<FilterProvider>
												<ReservedCarsProvider>
													<DateProvider>
														<Routes>
															<Route
																path='/reservation'
																element={<Reservation />}
															/>
															<Route path='/fleet' element={<Fleet />} />
															<Route path='/faq' element={<Faq />} />
															<Route path='/contact' element={<Contact />} />
															<Route path='/summary' element={<Summary />} />
															<Route path='/' element={<Main />} />
															<Route path='*' element={<Navigate to='/' />} />
														</Routes>
													</DateProvider>
												</ReservedCarsProvider>
											</FilterProvider>
										</SelectCityProvider>
									</RefundCityProvider>
								</RefundProvider>
							</UserProvider>
						</Container>
						<Footer />
						<CookiePopup />
					</UserDataProvider>
				</BrowserRouter>
			</I18nextProvider>
		</>
	)
}

const AppExport = () => (
	<LanguageProvider>
		<App />
	</LanguageProvider>
)

export default AppExport
