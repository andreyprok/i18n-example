import { I18n, MessageDescriptor } from '@lingui/core';
import { defineMessage } from '@lingui/macro';
import * as plural from 'make-plural/plurals';
// In case of dinamic load and activate - do not import these messages
import { messages as cs } from '../locales/cs/messages';
import { messages as en } from '../locales/en/messages';
import { messages as fr } from '../locales/fr/messages';
import { messages as it } from '../locales/it/messages';
import { messages as ru } from '../locales/ru/messages';
// In case of dinamic load and activate - just create an object with required keys
export const allMessages = { cs, en, fr, it, ru };

export type LanguageCode = keyof typeof allMessages;

export const languageCodes = Object.keys(allMessages).map((x) =>
  x.toLowerCase().trim(),
) as LanguageCode[];

export const languageDescriptors: { [key in LanguageCode]: MessageDescriptor } = {
  cs: defineMessage({ message: 'Сzech' }),
  en: defineMessage({ message: 'English' }),
  fr: defineMessage({ message: 'French' }),
  it: defineMessage({ message: 'Italian' }),
  ru: defineMessage({ message: 'Russian' }),
};

export const defaultLanguageCode: LanguageCode = 'en';

export const plurals = Object.keys(allMessages).reduce(
  (prev, curr) => ({
    ...prev,
    [curr]: { plurals: plural[curr as LanguageCode] },
  }),
  {},
);

export const loadAllLocals = (i18nObj: I18n) => {
  i18nObj.loadLocaleData(plurals);
  i18nObj.load(allMessages);
  // console.log(plurals);
};

export const activate = (i18nObj: I18n, locale: LanguageCode) => {
  i18nObj.activate(locale);
};

// export const dynamicLoadAndActivate = async (locale: LanguageCode) => {
//   const { messages } = await import(`./locales/${locale}/messages`);
//   i18nService.load(locale, messages);
//   i18nService.activate(locale);
// };
