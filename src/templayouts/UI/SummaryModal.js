import {
	Overlay,
	ModalStyled,
	CloseButton,
	AnimatedCar,
} from "../../assets/Styles/UI/SummaryModal.styles"
import animatedCar from "../../assets/Images/animatedCar.png"
import { useEffect, useRef } from "react"

const SummaryModal = ({ isOpen, onClose, children }) => {
	const carRef = useRef(null)

	useEffect(() => {
		const carElement = carRef.current

		if (isOpen && carElement) {
			const handleAnimationEnd = () => {
				onClose()
			}

			carElement.addEventListener("animationend", handleAnimationEnd)

			return () =>
				carElement.removeEventListener("animationend", handleAnimationEnd)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<Overlay onClick={onClose}>
			<ModalStyled onClick={e => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				{children}
				<AnimatedCar ref={carRef} src={animatedCar} alt='Driving car' />
			</ModalStyled>
		</Overlay>
	)
}

export default SummaryModal
