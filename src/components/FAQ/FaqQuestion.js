import React, { useState } from "react"
import styled from "styled-components"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import theme from "../../assets/Styles/theme"

const FaqQuestion = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAnswer = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<FaqQuestionBox onClick={toggleAnswer} $isOpen={isOpen}>
				<FontAwesomeIcon className='arrow-icon' icon={faChevronDown} />
				<Question>{question}</Question>
			</FaqQuestionBox>
			{isOpen && <Answer>{answer}</Answer>}
		</>
	)
}

export default FaqQuestion
export const FaqQuestionBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	background-color: ${theme.colors.primary};
	color: #fff;
	padding: 10px;
	font-size: 15px;
	margin-bottom: 10px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${theme.colors.hover};
	}

	.arrow-icon {
		transition: transform 0.3s ease;
		transform: rotate(${props => (props.$isOpen ? "180deg" : "0deg")});
	}
`

export const Question = styled.p`
	margin: 0;
	font-weight: bold;
`

export const Answer = styled.p`
	margin: 15px 5px;
	font-size: 15px;
`
