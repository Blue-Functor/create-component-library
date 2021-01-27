# library-utils

Useful utility functions and UI components for Storybook.

```js
import { 
    Description, 
    createMainStory,
    generateStory, 
    generateSubstories 
} from '@bluefunctor/library-template-utils';

```

## createMainStory()

The `createMainStory` function creates the story object that should be exported using `export default`.


### Arguments

- **options**: (*Object*)
    - **title**: (*String*) The title of the Story.
    - **component**: (*Component*) The `Component` of the Story.
    - **description**: (*String* | *Component*) Will be placed under the title of the Story.
    - **argTypes**: (*Object*) Descriptions and controls for the `props` table of the Story. [More...](https://storybook.js.org/docs/react/writing-stories/args)
    - **options**: (*Object*) You can use the options to pass extra parameters to the generated object.

### Returns

**story**: (*Object*) The Story object that storybook expects to be exported as default from a `*.stories.js` file.

### Example

Simple Story

```js
const story = createMainStory({
    title: 'Example/Component',
    component: Component,
});
```

Story with `Description` and argument descriptions.

```js
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
      description: 'The size can be \`small\` \`medium\` or \`large\`',
      control: {
        type: 'text',
      },
    }
  },
});
```

## generateStory()

The `generateStory` function creates a sub-story.

> `generateStory` should be used after creating the main story and exporting it as default.


### Arguments

- **options**: (*Object*)
    - **Template**: (*Component*) The Template is a component that passes arguments to the component of the story.
    ```javascript
        const Template = args => <YourComponent {...args} />;
    ```
    - **props**: (*Object*) These `props` will be passes to the arguments of the component in the Template.
    - **description**: (*String* | *Markdown*) Will be placed above the sub-story.

### Returns

**Story**: (*Component*) The sub-story component should be assigned to a `const` and exported.

### Example

Simple Story

```js
const Greeting = generateStory({
    Template,
    props: {},
});
```

Story with `Description` and props for the component.

```js
const Greeting = generateStory({
    Template,
    props: {
        message: 'Hello!', 
    }, 
    description: 'This component says \`Hello!\`' 
}); 
```

## generateSubstories()

The `generateSubstories` function creates multiple sub-stories for the same `Component`.

> `generateSubstories` should be used after creating the main story and exporting it as default.


### Arguments

- **Template**: (*Component*) The Template is a component that passes arguments to the component of the story.
- **...story options**: (*coma-separated Objects*) Each `Object` represents a sub-story. These `props` will be passed to the arguments of the component in the `Template`.
    - **options**: (*Object*)
        - **name**: (*String*) The title of the sub-story.
        - **props**: (*Object*) These `props` will be passes to the arguments of the component in the Template.
        - **description**: (*String* | *Markdown*) Will be placed above the sub-story.

### Returns

**stories**: (*Object*) The object has the names of each `option` from the props as `key` and holds the generated Story as `value`;

### Example

Generating a single Story

```js
const stories = generateSubstories(
    Template,
    {
      name: 'Primary',
      description: 'some story **markdown**',
      props: {
        primary: true,
        label: 'Button',
      },
    }
);
```

Generating multiple Stories

```js
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
      description: 'Use \`size\` to draw attention',
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
```

