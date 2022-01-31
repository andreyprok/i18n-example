export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'ru', right: '🇪🇸', title: 'Russian' },
        { value: 'it', right: '🇨🇳', title: 'Italian' },
        { value: 'cs', right: '🇰🇷', title: 'Chehiz' },
      ],
    },
  },
};