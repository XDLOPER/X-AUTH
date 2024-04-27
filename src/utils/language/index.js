import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'

import translateEn from '../language/locales/en/translations.json'
import translateTr from '../language/locales/tr/translations.json'

i18n
     .use(LanguageDetector)
     .use(Backend)
     .use(initReactI18next)
     .init(
          {
               supportedLngs : ['tr','en'],
               fallbackLng:'en',
               resources: {
                    en: { translation: translateEn},
                    tr: { translation: translateTr }
               },
          }
          )

export {i18n}