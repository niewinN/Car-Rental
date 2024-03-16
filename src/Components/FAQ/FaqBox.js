import React, { useState } from "react"
import styled from "styled-components"
import FaqQuestion from "./FaqQuestion"
import QuestionSearch from "./QuestionSearch"
import theme from "../../Assets/Styles/theme"
import { useTranslation } from "react-i18next"

const FaqBox = () => {
	const { t } = useTranslation()
	const faqItems = Array.from({ length: 20 }, (_, i) => ({
		question: t(`faq.question${i + 1}`),
		answer: t(`faq.answer${i + 1}`),
	}))
	// const questions = [
	// 	{
	// 		question: "Jakie dokumenty są wymagane do wypożyczenia samochodu?",
	// 		answer:
	// 			"Aby wypożyczyć samochód, należy posiadać ważne prawo jazdy oraz dowód osobisty lub paszport.",
	// 	},
	// 	{
	// 		question: "Czy muszę mieć kartę kredytową, aby wynająć samochód?",
	// 		answer:
	// 			"W większości przypadków wymagana jest karta kredytowa, ale istnieją również opcje wynajmu bez karty kredytowej. Należy skontaktować się z wypożyczalnią w celu uzyskania szczegółowych informacji.",
	// 	},
	// 	{
	// 		question: "Jakie są godziny otwarcia wypożyczalni?",
	// 		answer:
	// 			"Godziny otwarcia mogą się różnić w zależności od lokalizacji wypożyczalni. Zazwyczaj wypożyczalnie aut są otwarte od rana do wieczora, ale najlepiej jest sprawdzić godziny otwarcia na stronie internetowej wypożyczalni lub skontaktować się z nimi bezpośrednio.",
	// 	},
	// 	{
	// 		question: "Czy mogę wynająć samochód na jeden dzień?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni oferuje możliwość wynajmu samochodu na jeden dzień. Warto jednak upewnić się, czy dany model jest dostępny na krótki okres wynajmu.",
	// 	},
	// 	{
	// 		question: "Czy istnieje możliwość przedłużenia wynajmu?",
	// 		answer:
	// 			"Tak, w większości przypadków istnieje możliwość przedłużenia wynajmu samochodu. Należy skontaktować się z wypożyczalnią i uzgodnić warunki przedłużenia umowy.",
	// 	},
	// 	{
	// 		question: "Czy mogę zwrócić samochód wcześniej niż umówione?",
	// 		answer:
	// 			"Tak, zazwyczaj można zwrócić samochód wcześniej niż umówiono. Warto jednak wcześniej skontaktować się z wypożyczalnią, aby poinformować o zmianie planów i uniknąć dodatkowych opłat.",
	// 	},
	// 	{
	// 		question: "Czy wypożyczalnia oferuje ubezpieczenia dodatkowe?",
	// 		answer:
	// 			"Wiele wypożyczalni oferuje opcje dodatkowego ubezpieczenia, które mogą zabezpieczyć Cię przed różnymi ryzykami podczas podróży. Zaleca się zapoznanie się z ofertą ubezpieczeń i wybranie odpowiedniej opcji.",
	// 	},
	// 	{
	// 		question: "Jakie są kary za spóźnienie z oddaniem samochodu?",
	// 		answer:
	// 			"Kary za spóźnienie z oddaniem samochodu mogą się różnić w zależności od wypożyczalni i opóźnienia. Najlepiej jest sprawdzić warunki umowy wypożyczenia, aby dowiedzieć się o ewentualnych karach.",
	// 	},
	// 	{
	// 		question: "Czy mogę wynająć samochód na granicy kraju?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni oferuje możliwość przekroczenia granicy kraju wypożyczenia. Należy jednak wcześniej poinformować wypożyczalnię o planowanej trasie i zasięgnąć informacji na temat warunków wynajmu za granicą.",
	// 	},
	// 	{
	// 		question: "Czy mogę zabrać samochód za granicę?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni oferuje możliwość wynajęcia samochodu i podróży za granicę. Należy jednak wcześniej poinformować wypożyczalnię o planowanej trasie i zasięgnąć informacji na temat warunków wynajmu za granicą.",
	// 	},
	// 	{
	// 		question: "Jakie są ograniczenia dotyczące wieku wynajmującego?",
	// 		answer:
	// 			"Ograniczenia wiekowe mogą się różnić w zależności od wypożyczalni i kraju. W większości przypadków wynajmujący musi mieć co najmniej 21 lat. Niektóre wypożyczalnie mogą również nakładać ograniczenia na młodszych kierowców.",
	// 	},
	// 	{
	// 		question: "Czy istnieje dodatkowa opłata za dodatkowego kierowcę?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni może pobierać dodatkową opłatę za dodatkowego kierowcę. Należy sprawdzić warunki umowy wypożyczenia, aby dowiedzieć się o ewentualnych opłatach.",
	// 	},
	// 	{
	// 		question: "Czy samochody są wyposażone w nawigację GPS?",
	// 		answer:
	// 			"Nie wszystkie samochody wypożyczane są wyposażone w nawigację GPS. Warto wcześniej zapytać o dostępność tej funkcji i ewentualne koszty związane z jej korzystaniem.",
	// 	},
	// 	{
	// 		question: "Czy mogę wynająć dodatkowy fotel dla dziecka?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni oferuje możliwość wynajęcia dodatkowego fotela dla dziecka. Należy wcześniej poinformować wypożyczalnię o potrzebach dotyczących dzieci i zapytać o dostępność fotela.",
	// 	},
	// 	{
	// 		question: "Czy istnieje limit kilometrów podczas wynajmu?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni narzuca limit kilometrów podczas wynajmu. Należy sprawdzić warunki umowy wypożyczenia, aby dowiedzieć się o ewentualnych ograniczeniach dotyczących przebiegu.",
	// 	},
	// 	{
	// 		question: "Czy samochody są regularnie serwisowane?",
	// 		answer:
	// 			"Tak, wypożyczalnie zazwyczaj regularnie serwisują swoje samochody, aby zapewnić bezpieczeństwo i komfort użytkowania. Warto jednak wcześniej zapytać o politykę serwisowania.",
	// 	},
	// 	{
	// 		question: "Czy mogę zarezerwować konkretny model samochodu?",
	// 		answer:
	// 			"W niektórych wypożyczalniach istnieje możliwość wyboru konkretnego modelu samochodu. Należy jednak pamiętać, że dostępność konkretnych modeli może się różnić w zależności od lokalizacji i terminu.",
	// 	},
	// 	{
	// 		question: "Czy istnieje możliwość anulowania rezerwacji?",
	// 		answer:
	// 			"Tak, zazwyczaj istnieje możliwość anulowania rezerwacji, ale warunki anulacji mogą się różnić w zależności od wypożyczalni i terminu. Należy sprawdzić warunki umowy wypożyczenia.",
	// 	},
	// 	{
	// 		question: "Czy wypożyczalnia oferuje pomoc drogową?",
	// 		answer:
	// 			"Wiele wypożyczalni oferuje usługę pomoc drogową w razie awarii lub wypadku. Należy sprawdzić warunki umowy wypożyczenia, aby dowiedzieć się o dostępności tej usługi i jej zakresie.",
	// 	},
	// 	{
	// 		question: "Czy mogę oddać samochód w innym mieście niż miejsce wynajmu?",
	// 		answer:
	// 			"Tak, wiele wypożyczalni oferuje możliwość zwrotu samochodu w innym mieście niż miejsce wynajmu. Należy jednak wcześniej poinformować wypożyczalnię o planowanej trasie i zapytać o ewentualne opłaty za zwrot w innym miejscu.",
	// 	},
	// ]

	const [filteredQuestions, setFilteredQuestions] = useState(faqItems)
	return (
		<FaqContainer>
			<FaqTitle>{t("faqTitle")}</FaqTitle>
			<FaqText>{t("faqText")}</FaqText>
			<QuestionSearch
				questions={faqItems}
				setFilteredQuestions={setFilteredQuestions}
			/>
			{filteredQuestions.map((question, index) => (
				<FaqQuestion
					key={index}
					question={question.question}
					answer={question.answer}
				/>
			))}
		</FaqContainer>
	)
}

export default FaqBox

export const FaqContainer = styled.div`
	box-shadow: 0 2px 15px #646464;
	padding: 10px;
	margin: 10px;
	border-radius: 8px;
`
export const FaqTitle = styled.h2`
	margin-bottom: 10px;
	font-size: 20px;
	text-align: center;
	color: ${theme.colors.primary};
`

export const FaqText = styled.p`
	margin-bottom: 30px;
	font-size: 16px;
`
