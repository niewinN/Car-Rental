import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"
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

function App() {
	return (
		<>
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
		</>
	)
}

export default App
