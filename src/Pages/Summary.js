import React, {useState} from 'react'
import ReservationFormPanel from '../Components/SummaryPanel/ReservationFormPanel'
import ReservationSummaryPanel from '../Components/SummaryPanel/ReservationSummaryPanel'
import HeaderBottom from '../Layouts/UI/HeaderBottom'
import SummaryModal from '../Layouts/UI/SummaryModal'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next'

function Summary() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      nameSurname: '',
      phoneNumber: '',
      email: '',
      driveNr: '',
      streetNr: '',
      zipCode: '',
      city: '',
      country: '',
      nip: '',
      regon: '',
      carAgreement: false,
      personalDataAgreement: false,
      isCompany: false
    },
    validationSchema: Yup.object({
      nameSurname: Yup.string()
        .required(t("validationSummary.summaryNameSurname.summaryRequired"))
        .matches(/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/, t("validationSummary.summaryNameSurname.summaryMatches")),
      phoneNumber: Yup.string()
        .required(t("validationSummary.summaryPhoneNumber.summaryRequired"))
        .matches(/^\+?(\d{8,15})$/, t("validationSummary.summaryPhoneNumber.summaryMatches")),
      email: Yup.string()
        .required(t("validationSummary.summaryEmail.summaryRequired"))
        .email(t("validationSummary.summaryEmail.summaryMatches")),
      driveNr: Yup.string().required(t("validationSummary.summaryDriveNr")),
      streetNr: Yup.string().required(t("validationSummary.summaryStreetNr")),
      zipCode: Yup.string()
        .required(t("validationSummary.summaryZipCode.summaryRequired"))
        .matches(/^\d{2}-\d{3}$/, t("validationSummary.summaryZipCode.summaryMatches")),
      city: Yup.string().required(t("validationSummary.summaryCity")),
      country: Yup.string().required(t("validationSummary.summaryCountry")),
      nip: Yup.string().test('isCompany', t("validationSummary.summaryNip"), function (value) {
        return this.parent.isCompany ? !!value : true;
      }),
      regon: Yup.string().test('isCompany', t("validationSummary.summaryRegon"), function (value) {
        return this.parent.isCompany ? !!value : true;
      }),
      carAgreement: Yup.boolean().oneOf([true], t("validationSummary.summaryCarAgreement")),
      personalDataAgreement: Yup.boolean().oneOf([true], t("validationSummary.summaryPersonalDataAgreement")),
    }),
    onSubmit: (values) => {
      setIsModalOpen(true);
    },
    validateOnChange: false,
    validateOnBlur: true
  });
  
  return (
    <>
      <HeaderBottom smallMobile={false} />
      <ReservationFormPanel formik={formik} />
      <ReservationSummaryPanel handleValidationAndSubmit={formik.handleSubmit} />
      <SummaryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2>{t('thankYou')}</h2>
      <p>{t('contactSoon')}</p>
      <p>{t('happyJourney')}</p>
      </SummaryModal>
    </>
  );
}

export default Summary;