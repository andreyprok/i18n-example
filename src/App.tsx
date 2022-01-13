import React from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import Inbox from './inbox';
import { messages } from './locales/en/messages';

i18n.load('en', messages);
i18n.activate('en');

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <Inbox />
    </I18nProvider>
  );
}

export default App;
