import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuthorsBox, AuthorsText, AuthorsContainer } from '../../Assets/Styles/UI/Authors.styles';


function Authors() {
    const { t } = useTranslation();

    return (
        <AuthorsBox>
            <AuthorsContainer>
            <AuthorsText>{t('authors')}</AuthorsText>
            </AuthorsContainer>
        </AuthorsBox>
    )
}

export default Authors;