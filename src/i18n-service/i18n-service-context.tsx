import React, { PropsWithChildren, useContext } from 'react';
import { I18nProvider } from '@lingui/react';
import { I18n } from '@lingui/core';

export interface II18nService<T extends string> {
  loadLangs: () => void;
  codeList: () => T[];
  langList: () => Record<T, string>;
  switchLang: (langCode: T) => boolean;
  currentCode: T;
  i18n: I18n;
}

const I18nServiceContext = React.createContext<II18nService<string> | undefined>(undefined);

export const useI18nService = () => {
  const i18nService = useContext(I18nServiceContext);

  if (i18nService === undefined) {
    throw new Error('useI18nService must be used within I18nServiceProvider');
  }

  return i18nService;
};

export interface I18nServiceProviderProps<T extends string> {
  service: II18nService<T>;
  defaultLangCode: T;
}

function I18nServiceProvider({
  children,
  service,
  defaultLangCode,
}: PropsWithChildren<I18nServiceProviderProps<string>>) {
  service.loadLangs();
  service.switchLang(defaultLangCode);

  return (
    <I18nServiceContext.Provider value={service}>
      <I18nProvider i18n={service.i18n}>{children}</I18nProvider>
    </I18nServiceContext.Provider>
  );
}

export default I18nServiceProvider;
