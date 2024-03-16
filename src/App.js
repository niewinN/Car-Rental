import "./App.css"
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import Navigation from "./layouts/Navigation/Navigation"
import Reservation from "./pages/Reservation"
import Fleet from "./pages/Fleet"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Summary from "./pages/Summary"
import Footer from "./layouts/Footer/Footer"
import Container from "./components/Container/Container"
import Main from "./layouts/Main/Main"
import { FilterProvider } from "./contexts/FilterContext"
import { DateProvider } from "./contexts/DateContext"
import { ReservedCarsProvider } from "./contexts/ReservedCarsContext"
import { RefundProvider } from "./contexts/RefundContext"
import { SelectCityProvider } from "./layouts/Main/CarSearch/ReservationContext/SelectCityContext"
import CookiePopup from "./layouts/UI/CookiePopup"
import { RefundCityProvider } from "./layouts/Main/CarSearch/ReservationContext/RefundCityContext"
import { UserProvider } from "./contexts/UserContext"
import { UserDataProvider } from "./contexts/UserDataContext"
import {
	LanguageProvider,
	useLanguage,
} from "./layouts/Main/CarSearch/BarSearch/ReservationSearch/LanguageContext"
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
