import { Description, createMainStory, generateStory } from '../../../packages/library-template-utils';

const story = createMainStory({
    title: 'System/Components/Description',
    component: Description,
    description: (
        <Description
            name={'Description'}
            description={'Add description to your Stories.'}
            packageUrl={'https://bit.dev/georgelivas/storybook-template/button'}
            installCommand={'$ yarn add @bit/georgelivas.storybook-template.button'}
            body={
                `Description is used to add a description text with a link to the documentation of a component.
                To use is pass it as a parameter in the createMainStory function. for more info see the Component Documentation guide.`
            }
        />
    ),
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the component',
            default: '',
        },
        description: {
            description: 'The description of the component',
            control: {
                type: 'text',
            },
            default: '',
        },
        packageUrl: {
            control: 'text',
            description: 'The URL of the `bit.dev` package',
        },
        installCommand: {
            control: 'text',
            description: 'The `npm` or `yarn` name to install the component',
        },
        body: {
            control: 'text',
            description: 'Information about your component. This will render in a paragraph.',
        }
    },
});

const Template = (args) => <Description {...args} />;

export const Primary = generateStory(
    {
        Template,
        description: 'The `Description` component used in this Story',
        props: {
            name: 'Description',
            description: 'The Description is added on the top of each Story.',
            packageUrl: 'https://bit.dev/georgelivas/storybook-template/button',
            installCommand: '$ yarn add @bit/georgelivas.storybook-template.button',
            body: `Description is used to add a description text with a link to the documentation of a component.
                  To use is pass it as a parameter in the createMainStory function. for more info see the Component Documentation guide.`
        },
    },
);

export default story;
// export { Primary };
