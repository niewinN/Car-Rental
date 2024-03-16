import React from "react"
import ContactForm from "../components/ContactPanel/ContactForm"
import ContactInformation from "../components/ContactPanel/ContactInformation"
import ContactMap from "../components/ContactPanel/ContactMap"
import { ContactPanelDesktop } from "../assets/Styles/Contact/ContactPanel.styles"
import HeaderBottom from "../layouts/UI/HeaderBottom"

function Contact() {
	return (
		<>
			<HeaderBottom smallMobile={true} />
			<ContactInformation />
			<ContactPanelDesktop>
				<ContactMap />
				<ContactForm />
			</ContactPanelDesktop>
		</>
	)
}

export default Contact
