const createMainStory = ({ title, component, description, argTypes, options }) => ({
    title,
    component,
    parameters: {
        componentSubtitle: description,
    },
    argTypes,
    ...options,
});

export default createMainStory;
