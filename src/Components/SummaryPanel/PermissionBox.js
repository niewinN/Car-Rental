import React from 'react'
import { Permission, PermissionBoxContainer, PermissionBoxPanel, FormCheckBox } from '../../Assets/Styles/SummaryPanel/PermissionBox.styles'
import { useTranslation } from 'react-i18next';

function PermissionBox( {permissions, setPermissions}) {

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions(name, checked);
};
  
  const { t } = useTranslation();

  return (
    <PermissionBoxPanel>
        <PermissionBoxContainer>
            <FormCheckBox name="carAgreement" onChange={handleCheckboxChange} checked={permissions.carAgreement}/>
            <Permission>{t("premission.one")}</Permission>
        </PermissionBoxContainer>
        <PermissionBoxContainer>
            <FormCheckBox name="personalDataAgreement" onChange={handleCheckboxChange} checked={permissions.personalDataAgreement}/>
            <Permission>{t("premission.two")}</Permission>
        </PermissionBoxContainer>
    </PermissionBoxPanel>
  )
}

export default PermissionBox