import generateStory from './generateStory';

const generateSubstories = (Template, ...stories) => stories.reduce(
    (substories, story) => ({
        ...substories, [story.name]: generateStory({ Template, ...story })
    }), {}
);

export default generateSubstories;
