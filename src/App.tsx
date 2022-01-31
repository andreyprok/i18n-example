import React from 'react';
import { detect, fromNavigator } from '@lingui/detect-locale';
import { i18nCustomService } from './i18n-service/i18n-service';
import I18nServiceProvider from './i18n-service/i18n-service-context';
import Inbox from './inbox';
import { defaultLanguageCode } from './i18n-service/i18n-service-types';
// import { en, cs, fr } from 'make-plural/plurals';
// import Inbox from './inbox';
// import I18nServiceProvider from './i18n-service/i18n-service-context';
// import { messages as enMessages } from './locales/en/messages';
// import { messages as ruMessages } from './locales/ru/messages';
// import { messages as frMessages } from './locales/fr/messages';
// import { defaultLanguageCode } from './i18n-service/i18n-service-types';
// import { i18nCustomService } from './i18n-service/i18n-service';

// i18n.loadLocaleData({
//   en: { plurals: en },
//   cs: { plurals: cs },
//   fr: { plurals: fr },
// });

// i18n.load('en', enMessages);
// i18n.load('ru', ruMessages);
// i18n.load('fr', frMessages);

const currentLangCode = detect(fromNavigator(), defaultLanguageCode) ?? defaultLanguageCode;

// i18n.activate(currentLangCode ?? defaultLanguageCode);
function App() {
  // console.log(`Yande xMetrika trackPage has been fired with`);
  return (
    <I18nServiceProvider service={i18nCustomService} defaultLangCode={currentLangCode}>
      <Inbox />
    </I18nServiceProvider>
  );
}

export default App;
