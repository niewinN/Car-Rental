import React, { useState } from "react"
import styled from "styled-components"
import FaqQuestion from "./FaqQuestion"
import QuestionSearch from "./QuestionSearch"
import theme from "../../assets/Styles/theme"
import { useTranslation } from "react-i18next"

const FaqBox = () => {
	const { t } = useTranslation()
	const faqItems = Array.from({ length: 20 }, (_, i) => ({
		question: t(`faq.question${i + 1}`),
		answer: t(`faq.answer${i + 1}`),
	}))

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
	max-width: 1260px;
	margin: 10px;
	/* margin-top: 20px; */
	/* margin: 10px auto; */

	@media (min-width: 1260px) {
		margin: 20px auto;
	}
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
