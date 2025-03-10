import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    supportedLngs: ['en', 'it'],
    fallbackLng: 'en',
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'], 
      },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    resources: {
        en: {
            translation: {
                SEE_ALL: 'See All'
            }
        },
        it: {
            translation: {
                SEE_ALL: 'Vedi Tutti'
            }
        }
    }
})