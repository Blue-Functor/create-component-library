import theme from './theme';
import order from '../stories/storyOrder';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme,
  },
  options: {
    storySort: {
      order,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#212121',
      },
    ],
  },
}
