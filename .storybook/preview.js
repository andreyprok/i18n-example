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
        { value: 'en', right: '๐บ๐ธ', title: 'English' },
        { value: 'fr', right: '๐ซ๐ท', title: 'Franรงais' },
        { value: 'ru', right: '๐ช๐ธ', title: 'Russian' },
        { value: 'it', right: '๐จ๐ณ', title: 'Italian' },
        { value: 'cs', right: '๐ฐ๐ท', title: 'Chehiz' },
      ],
    },
  },
};