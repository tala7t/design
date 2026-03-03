import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EnglishTransition from './Languages/EnglishTransition.json';
import ArabicTransition from './Languages/ArabicTransition.json';
import GermanTransition from './Languages/GermanTransition.json';
import ItalianTransition from './Languages/ItalianTransition.json';
import SpanishTransition from './Languages/SpanishTransition.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {   
      en: { translation: EnglishTransition },
      ar: { translation: ArabicTransition },
      de: { translation: GermanTransition },
      it: { translation: ItalianTransition },
      es: { translation: SpanishTransition },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;