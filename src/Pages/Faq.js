import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import FleetTop, { FleetNumber } from '../Components/AutoPanel/FleetTop'
import FaqBox from '../Components/FAQ/FaqBox'

function Faq() {
	return (
		<>
			<FleetTop />
			<FaqBox />
		</>
	)
}

export default Faq
