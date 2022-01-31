import { I18n, setupI18n } from '@lingui/core';
import { II18nService } from './i18n-service-context';
import {
  activate,
  defaultLanguageCode,
  LanguageCode,
  languageCodes,
  languageDescriptors,
  loadAllLocals,
} from './i18n-service-types';

const missing = (language: string, id: string) => {
  // eslint-disable-next-line no-console
  console.error(`Translation in ${language} for ${id} is missing!`);
  // eslint-disable-next-line no-alert
  // alert(`Translation in ${language} for ${id} is missing!`);
  return `'🚨${id}`;
};

export const i18nCustom: I18n = setupI18n({ missing });

export const i18nCustomService: II18nService<string> = {
  loadLangs(): void {
    loadAllLocals(i18nCustom);
  },
  codeList(): string[] {
    return languageCodes;
  },
  langList(): Record<string, string> {
    const langs: Record<string, string> = Object.keys(languageDescriptors).reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: i18nCustom._(languageDescriptors[curr as LanguageCode]),
      }),
      {},
    );

    return langs;
  },
  switchLang(langCode: string): boolean {
    if ((languageCodes as string[]).includes(langCode)) {
      activate(i18nCustom, langCode as LanguageCode);
      return true;
    }
    activate(i18nCustom, defaultLanguageCode);
    return false;
  },
  currentCode: i18nCustom.locale,
  i18n: i18nCustom,
};
