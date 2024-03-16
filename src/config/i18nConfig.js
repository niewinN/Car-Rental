// config/i18nConfig.js
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
	en: {
		translation: require("../assets/Files/en.json"),
	},
	pl: {
		translation: require("../assets/Files/pl.json"),
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
