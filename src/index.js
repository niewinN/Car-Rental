import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { LanguageProvider, useLanguage } from './Layouts/Main/CarSearch/BarSearch/ReservationSearch/LanguageContext';

library.add(faUser);


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithLanguage = () => {
  const userLanguage = useLanguage();

  i18n.init({
    resources: {
      en: {
        translation: require('./Assets/Files/en.json'),
      },
      pl: {
        translation: require('./Assets/Files/pl.json'),
      },
    },
    lng: userLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </I18nextProvider>
  );
};

root.render(
  <LanguageProvider>
    <AppWithLanguage />
  </LanguageProvider>
);

reportWebVitals();