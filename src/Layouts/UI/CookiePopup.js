import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PreferenceDescBox, PopupContainer, PreferenceTitle, ToggleButton, ToggleText, Overlay, Description, Title, PreferenceContainer, Slider, ConfirmButton } from '../../Assets/Styles/UI/CookiePopup.styles';

function CookiePopup() {
    const { t } = useTranslation();

    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [preferences, setPreferences] = useState({
      trafficAnalysis: false,
      adsAndProfiling: false,
      optimization: false,
    });
  
    useEffect(() => {
      const storedConsent = localStorage.getItem('cookiePreferences');
      if (!storedConsent) {
        setPopupVisibility(true);
      } else {
        setPreferences(JSON.parse(storedConsent));
      }
    }, []);
  
    const handleTogglePreference = (preference) => {
      setPreferences(prev => ({ ...prev, [preference]: !prev[preference] }));
    };
  
    const handleConfirm = () => {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      setPopupVisibility(false);
    };

    return (
        isPopupVisible && (
        <Overlay>
            <PopupContainer>
            <Title>{t('privacyOptions')}</Title>
            <Description>{t('cookieDescription')}</Description>
            {[
                { key: 'trafficAnalysis', label: t('trafficAnalysis.title'), description: t('trafficAnalysis.description') },
                { key: 'adsAndProfiling', label: t('adsAndProfiling.title'), description: t('adsAndProfiling.description') },
                { key: 'optimization', label: t('optimization.title'), description: t('optimization.description') },
            ].map(({ key, label, description }) => (
                <PreferenceContainer key={key}>
                <PreferenceDescBox>
                    <PreferenceTitle>{label}</PreferenceTitle>
                    <Description>{description}</Description>
                </PreferenceDescBox>
                <ToggleButton isActive={preferences[key]} onClick={() => handleTogglePreference(key)}>
                    <ToggleText text="OFF" isActive={!preferences[key]}>OFF</ToggleText>
                    <ToggleText text="ON" isActive={preferences[key]}>ON</ToggleText>
                    <Slider />
                </ToggleButton>
                </PreferenceContainer>
            ))}
            <ConfirmButton onClick={handleConfirm}>{t('confirm')}</ConfirmButton>
            </PopupContainer>
        </Overlay>
        )
    );
    }

export default CookiePopup;
