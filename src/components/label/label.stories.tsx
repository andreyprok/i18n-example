import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Label from './label';
import I18nServiceProvider from '../../i18n-service/i18n-service-context';
import { i18nCustomService } from '../../i18n-service/i18n-service';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Label,
  decorators: [
    (Story, { globals: { locale } }) => (
      <I18nServiceProvider service={i18nCustomService} defaultLangCode={locale}>
        <Story />
      </I18nServiceProvider>
    ),
  ],
} as ComponentMeta<typeof Label>;

export function Primary() {
  return <Label>Label value</Label>;
}

export function Colored() {
  return <Label color="blue">Label value</Label>;
}
