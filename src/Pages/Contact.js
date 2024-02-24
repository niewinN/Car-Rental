import React from 'react'
import ContactForm from '../Components/ContactPanel/ContactForm'
import ContactInformation from '../Components/ContactPanel/ContactInformation'
import ContactMap from '../Components/ContactPanel/ContactMap'
import { ContactPanelDesktop } from '../Assets/Styles/Contact/ContactPanel.styles'
import HeaderBottom from '../Layouts/UI/HeaderBottom'

function Contact() {
  return (
    <>
        <HeaderBottom smallMobile={true}/>
        <ContactInformation/>
          <ContactPanelDesktop>
            <ContactMap/>
            <ContactForm/>
          </ContactPanelDesktop>
    </>
  )
}

export default Contact