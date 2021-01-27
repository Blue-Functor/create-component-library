
import { Description, createMainStory, generateStory } from '../packages/library-template-utils';

import { MyComponent } from '../packages/library-template-my-component';
import { version } from '../packages/library-template-my-component/package.json';

const story = createMainStory({
  title: 'NEW/Component',
  component: MyComponent,
  description: (
      <Description
          name="MyComponent"
          description=""
          packageUrl="https://www.npmjs.com/package/@bluefunctor/library-template-my-component"
          installCommand="@bluefunctor/library-template-my-component"
      />
  ),
});

const Template = (args) => <MyComponent {...args} />;

const Greeting = generateStory({
    Template,
    props: {},
});

export { Greeting };
export default story;
