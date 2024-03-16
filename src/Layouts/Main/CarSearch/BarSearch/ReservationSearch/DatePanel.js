import React, { useEffect, useRef, useState } from "react"
import {
	StyledButtonDate,
	StyledDatePanel,
	StyledDateTime,
	StyledButtonContainer,
} from "./ReservationSearch.styles"
import { useTranslation } from "react-i18next"
import { useDateContext } from "../../../../../contexts/DateContext"
import "react-datetime/css/react-datetime.css"
import moment from "moment"
import "moment/locale/pl"
import styled from "styled-components"

moment.locale("pl")

function DatePanel({
	isOpen,
	closeDate,
	useDate,
	onPickupDateChange,
	onReturnDateChange,
}) {
	const { t, i18n } = useTranslation()

	const {
		selectedPickupState,
		selectedReturnState,
		setSelectedPickupState,
		setSelectedReturnState,
		setDateWithExpiry,
	} = useDateContext()

	const datetimeRef = useRef(null)
	const [dateSelected, setDateSelected] = useState(false)
	const [isTimeView, setIsTimeView] = useState(false)

	const getCurrentFormattedDate = () => {
		const now = new Date()
		const dayNumber = now.getDate()
		const yearNumber = now.getFullYear()
		const monthName = t(
			`${new Intl.DateTimeFormat(i18n.language, { month: "long" })
				.format(now)
				.toLowerCase()}`
		)

		return `${dayNumber} ${monthName} ${yearNumber}`
	}

	const handleConfirmClick = () => {
		if (useDate === 0 && selectedPickupState) {
			onPickupDateChange(selectedPickupState)
			setDateWithExpiry("pickupDate", selectedPickupState)
		} else if (useDate === 1 && selectedReturnState) {
			onReturnDateChange(selectedReturnState)
			setDateWithExpiry("returnDate", selectedReturnState)
		}
		closeDate()
	}

	const isFutureOrTodayDate = currentDate => {
		const today = new Date()
		const startOfToday = today.setHours(0, 0, 0, 0)
		return currentDate.isSameOrAfter(startOfToday, "day")
	}

	const isValidDateForReturn = currentDate => {
		if (useDate === 1) {
			return currentDate.isSameOrAfter(selectedPickupState, "day")
		}
		return isFutureOrTodayDate(currentDate)
	}

	useEffect(() => {
		if ((selectedPickupState || selectedReturnState) && dateSelected) {
			if (
				datetimeRef.current &&
				datetimeRef.current.state.currentView !== "time"
			) {
				datetimeRef.current.setState({ currentView: "time" })
			}
		}
	}, [selectedPickupState, selectedReturnState, dateSelected])

	//   console.log(selectedPickupState.locale()); // powinno zwrócić "pl" jeśli lokalizacja jest ustawiona prawidłowo
	//   console.log(selectedReturnState.locale());

	return (
		<>
			{isOpen && <DateOverlay onClick={closeDate} />}
			<StyledDatePanel className={isTimeView ? "" : "hide-buttons"}>
				{/* <div className="head">
                {useDate === 0 && selectedPickupState
                    ? selectedPickupState.format('DD-MM-YYYY - HH:mm')
                    : useDate === 0
                        ? getCurrentFormattedDate()
                        : ''}
                {useDate === 1 && selectedReturnState
                    ? selectedReturnState.format('DD-MM-YYYY - HH:mm')
                    : useDate === 1
                        ? getCurrentFormattedDate()
                        : ''}
            </div> */}
				<div className='date-picker-container'>
					<StyledDateTime
						ref={datetimeRef}
						input={false}
						dateFormat='YYYY-MM-DD'
						timeFormat='HH:mm'
						open={true}
						closeOnSelect={false}
						className='horizontal-time-picker'
						value={
							useDate === 0
								? selectedPickupState
								: useDate === 1
								? selectedReturnState
								: null
						}
						onChange={newDate => {
							setDateSelected(true)
							if (useDate === 0) {
								setSelectedPickupState(newDate)
								if (newDate.isAfter(selectedReturnState)) {
									const newReturnDate = newDate
										.clone()
										.locale("pl")
										.add(1, "day")
									setSelectedReturnState(newReturnDate)
								}
							} else if (useDate === 1) {
								setSelectedReturnState(newDate)
							}
						}}
						isValidDate={isValidDateForReturn}
					/>
				</div>
				<StyledButtonContainer>
					<StyledButtonDate
						onClick={closeDate}
						style={{ marginRight: "20px", cursor: "pointer" }}>
						{t("buttons.cancel")}
					</StyledButtonDate>
					<StyledButtonDate
						onClick={handleConfirmClick}
						style={{ cursor: "pointer" }}>
						{t("buttons.confirm")}
					</StyledButtonDate>
				</StyledButtonContainer>
			</StyledDatePanel>
		</>
	)
}

export default DatePanel

export const DateOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7); /* Przyciemnienie */
	z-index: 2147483646;
	/* z-index: 99999999999999999999999; Ważne, aby Overlayer był powyżej innych elementów */

	/* Jeśli chcesz efekt rozmycia */
	backdrop-filter: blur(5px);
`
