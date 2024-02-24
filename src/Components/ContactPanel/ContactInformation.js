import React from 'react'
import {
	PhoneNumberContact,
	ContactInformationWrapper,
	ContactInformationItemText,
	ContactArrow,
	ContactInformationBox,
	ContactInformationItem,
	ContactInformationText,
} from '../../Assets/Styles/Contact/ContactInformation.styles'
import contactArrow from '../../Assets/Images/contact_arrow.png'
import { useTranslation } from 'react-i18next'

function ContactInformation() {
	const { t } = useTranslation()

	return (
		<ContactInformationWrapper>
			<PhoneNumberContact />
			<ContactInformationBox>
				<ContactInformationItem>
					<ContactInformationItemText>
						{t('website')}
					</ContactInformationItemText>
					<ContactInformationItemText>
						{t('address.city')}
					</ContactInformationItemText>
					<ContactInformationItemText>
						{t('address.street')}
					</ContactInformationItemText>
				</ContactInformationItem>
				<ContactInformationItem>
					<ContactInformationItemText>
						{t('taxInfo.nip')}
					</ContactInformationItemText>
					<ContactInformationItemText>
						{t('taxInfo.regon')}
					</ContactInformationItemText>
					<ContactInformationItemText>
						{t('taxInfo.bankAccount')}
						<br />
						{t('taxInfo.bankAccountNr')}
					</ContactInformationItemText>
				</ContactInformationItem>
				<ContactInformationText>
					<ContactInformationItemText>{t('findUs')}</ContactInformationItemText>
					<ContactArrow src={contactArrow} alt='' />
				</ContactInformationText>
			</ContactInformationBox>
		</ContactInformationWrapper>
	)
}

export default ContactInformation
