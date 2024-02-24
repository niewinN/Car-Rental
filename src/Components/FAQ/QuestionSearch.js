import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../Assets/Styles/theme'

const QuestionSearch = ({ questions, setFilteredQuestions }) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = e => {
		const query = e.target.value.toLowerCase()
		setSearchQuery(query)
		const filtered = questions.filter(question =>
			question.question.toLowerCase().includes(query)
		)
		setFilteredQuestions(filtered)
	}
	return (
		<>
			<SearchBox>
				<QuestionInput
					type='text'
					placeholder='Znajdź pytanie...'
					value={searchQuery}
					onChange={handleSearch}
				/>
			</SearchBox>
		</>
	)
}

export default QuestionSearch

export const SearchBox = styled.div`
	margin-bottom: 20px;
`

export const QuestionInput = styled.input`
	width: 100%;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid ${theme.colors.primary};
`
