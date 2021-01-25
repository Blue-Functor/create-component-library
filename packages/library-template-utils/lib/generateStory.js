const generateStory = ({ Template, props, description }) => {
    const Story = Template.bind({});

    Story.args = props;

    Story.parameters = {
        docs: {
            description: {
                story: description
            },
            source: {
                // code: 'Some custom string here',
                // type: 'code',
            },
        },
    };

    return Story;
};

export default generateStory;
