import React from "react"
import {
	SectionWrapper,
	NameDiv,
	Icon,
	Icon2,
} from "../assets/Styles/SectionName.styles"

function SectionName(props) {
	const handleClick = () => {
		props.toggleEdit()
	}

	return (
		<SectionWrapper>
			<NameDiv>
				<p>{props.name}</p>
			</NameDiv>
			<Icon onClick={handleClick}>{props.iconPen}</Icon>
			<Icon2 onClick={() => props.setBookClicked(!props.bookClicked)}>
				{props.iconBook}
			</Icon2>
		</SectionWrapper>
	)
}

export default SectionName
