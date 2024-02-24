import React from 'react'
import { HeaderBottomContainer } from '../../Assets/Styles/UI/HeaderBottom.styles'
import { useTranslation } from 'react-i18next';

function HeaderBottom({smallMobile}) {
  const { t } = useTranslation()

  return (
    <HeaderBottomContainer smallMobile={smallMobile}>
        {t('reservationsPhone')}
    </HeaderBottomContainer>
  )
}

export default HeaderBottom



