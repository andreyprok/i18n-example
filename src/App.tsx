import React from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en, cs, fr } from 'make-plural/plurals';
import Inbox from './inbox';
import { messages as enMessages } from './locales/en/messages';
import { messages as csMessages } from './locales/cs/messages';
import { messages as frMessages } from './locales/fr/messages';

i18n.loadLocaleData({
  en: { plurals: en },
  cs: { plurals: cs },
  fr: { plurals: fr },
});

i18n.load('en', enMessages);
i18n.load('cn', csMessages);
i18n.load('fr', frMessages);

i18n.activate('en');

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <Inbox />
    </I18nProvider>
  );
}

export default App;
