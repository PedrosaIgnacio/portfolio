import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationES from '../locales/es/translation.json';
import translationEN from '../locales/en/translation.json';
i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'es',
		fallbackLng: 'en',
		resources: {
			es: {
				translation: translationES,
			},
			en: {
				translation: translationEN,
			},
		},
		interpolation: {
			escapeValue: false,
		},
		debug: true,
	});

export default i18n;
