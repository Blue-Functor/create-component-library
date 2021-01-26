import { Description, createMainStory, generateSubstories } from '../packages/library-template-utils';

import { Button } from '../packages/library-template-button';

const story = createMainStory({
  title: 'Example/Button',
  component: Button,
  description: (
      <Description
          name={'Button'}
          description={'Buttons allow users to take actions, and make choices, with a single tap.'}
          packageUrl={'https://bit.dev/georgelivas/storybook-template/button'}
          installCommand={'$ yarn add @bit/georgelivas.storybook-template.button'}
      />
  ),
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Button background color',
      default: '#fff',
    },
    label: {
      description: 'The text of the button',
      control: {
        type: 'text',
      },
    },
    primary: {
      description: 'The color of the button',
      table: {
        type: {
          summary: 'more',
          detail: 'This color come from the theme of the project.'
        },
      },
    },
    size: {
      description: 'The size can be `small` `medium` or `large`',
      control: {
        type: 'text',
      },
    }
  },
});

const Template = (args) => <Button {...args} />;

const stories = generateSubstories(
    Template,
    {
      name: 'Primary',
      description: 'some story **markdown**',
      props: {
        primary: true,
        label: 'Button',
      },
    },
    {
      name: 'Secondary',
      description: 'Typically used for less-pronounced actions.',
      props: {
        label: 'Button',
      },
    },
    {
      name: 'Large',
      description: `Use \`size\` to draw attention

- \`small\`
- \`medium\` default
- \`small\``,
      props:{
        size: 'large',
        label: 'Button',
      },
    },
    {
      name: 'Small',
      props:{
        size: 'small',
        label: 'Button',
      },
    },
);

export const { Primary, Secondary, Large, Small } = stories;
export default story;
