import React, { useState } from "react"
import {
	ContactMapWrapper,
	ContactMapBox,
	ContactMapAddress as OriginalContactMapAddress,
} from "../../assets/Styles/Contact/ContactMap.styles"
import staticMap from "../../assets/Images/map.jpg"
import styled from "styled-components"

const ContactMapAddress = styled(OriginalContactMapAddress)`
	position: relative;
	width: 100%;
	height: 100%;
`

function ContactMap() {
	const [iframeIsLoaded, setIframeIsLoaded] = useState(false)

	const sharedStyles = {
		position: "absolute",
		top: "50%",
		left: "50%",
		width: "92%",
		height: "92%",
		transform: "translate(-50%, -50%)",
	}

	return (
		<ContactMapWrapper>
			<ContactMapBox>
				<ContactMapAddress>
					{!iframeIsLoaded && (
						<img src={staticMap} alt='Static Map' style={sharedStyles} />
					)}

					<iframe
						title='CAR RENTAL'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.470574996079!2d20.980015979345712!3d52.25299929999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb860a3a8fc7%3A0xd0b4a9d0311ace3d!2sRestauracja%20McDonald&#39;s!5e0!3m2!1spl!2spl!4v1708738112200!5m2!1spl!2spl'
						style={{ ...sharedStyles, opacity: iframeIsLoaded ? 1 : 0 }}
						onLoad={() => setIframeIsLoaded(true)}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</ContactMapAddress>
			</ContactMapBox>
		</ContactMapWrapper>
	)
}

export default ContactMap
