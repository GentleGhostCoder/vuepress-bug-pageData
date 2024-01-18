import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Page',
        link: '/',
      },
      {
        text: 'Page1',
        link: '/page1',
      },
      {
        text: 'Page2',
        link: '/page2',
      },
    ],
  }),
});
