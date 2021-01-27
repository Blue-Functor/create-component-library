const component = (name) => `
const ${name} = () => (
    <h1>Hello world!</h1>
);

export { ${name} };
`;

const story = ({ componentName, componentPath, url, npmName }) => `
import { Description, createMainStory, generateStory } from '../packages/library-template-utils';

import { ${ componentName } } from '../${ componentPath }';
import { version } from '../${ componentPath }/package.json';

const story = createMainStory({
  title: 'NEW/Component',
  component: ${ componentName },
  description: (
      <Description
          name="${ componentName }"
          description=""
          packageUrl="${ url }"
          installCommand="${ npmName }"
      />
  ),
});

const Template = (args) => <${ componentName } {...args} />;

const Greeting = generateStory({
    Template,
    props: {},
});

export { Greeting };
export default story;
`;

const templates = {
    component,
    story,
};

module.exports = { component, story };
