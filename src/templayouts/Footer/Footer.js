import React from "react"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Container from "../../components/Container/Container"
import { useTranslation } from "react-i18next"
import {
	FooterBox,
	FooterContainer,
	FooterIcon,
	FooterIcons,
	FooterInformation,
	FooterLink,
	FooterLinks,
	InfoBox,
	InfoBoxText,
} from "../../assets/Styles/UI/Footer.styles"

function Footer() {
	const { t } = useTranslation()

	return (
		<FooterBox>
			<Container>
				<FooterContainer>
					<FooterInformation>
						<InfoBox>
							<InfoBoxText>{t("footer.name")}</InfoBoxText>
							<InfoBoxText>{t("footer.address")}</InfoBoxText>
							<InfoBoxText>{t("footer.street")}</InfoBoxText>
						</InfoBox>
						<InfoBox>{t("footer.contactUs")}</InfoBox>
						<InfoBox>
							<InfoBoxText>{t("footer.reservation")}</InfoBoxText>
							<InfoBoxText>{t("footer.phoneNumber")}</InfoBoxText>
						</InfoBox>
						<InfoBox>{t("footer.email")}</InfoBox>
					</FooterInformation>
					<FooterLinks>
						<InfoBox>
							<FooterLink to='/faq'>{t("footer.links.terms")}</FooterLink>
						</InfoBox>
						<InfoBox>
							<FooterLink to='/faq'>{t("footer.links.info")}</FooterLink>
						</InfoBox>
						<InfoBox>
							<FooterLink to='/faq'>{t("footer.links.privacy")}</FooterLink>
						</InfoBox>
						<InfoBox>
							{t("footer.complaints")}
							<br />
							{t("footer.phoneNumber")}
						</InfoBox>
					</FooterLinks>
					<div>
						<p>{t("footer.contact")}</p>
						<FooterIcons>
							<FooterIcon icon={faFacebook} />
							<FooterIcon icon={faInstagram} />
						</FooterIcons>
					</div>
				</FooterContainer>
			</Container>
		</FooterBox>
	)
}

export default Footer
