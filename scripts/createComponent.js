const fs = require('fs');
const { execSync } = require('child_process');
const Ora = require('ora');
const config = require('../library.json');
const { component, story } = require('./templates');

const componentNames = process.argv.slice(2);

if (componentNames.length < 1) {
    console.error('ERROR: Please specify at least one component name.');
    process.exit(-1)
}

const kebabize = string => {
    const upper = /(?:(?<!\p{Uppercase_Letter})\p{Uppercase_Letter}|\p{Uppercase_Letter}(?!\p{Uppercase_Letter}))/gu;
    return string.replace(upper, "-$&").replace(/^-/, "").toLowerCase();
}

const spinner = new Ora({
    discardStdin: false,
    text: 'Initialising variables',
});
spinner.color = 'blue';

const createComponent = async componentName => {
    spinner.start();
    const libName = `${config.libraryName}-${kebabize(componentName)}`;

    const npmName = `${config.npmOrg}/${libName}`
    const path = `packages/${config.libraryName}-${kebabize(componentName)}`;
    const packagePath = `${path}/package.json`;
    const libraryIndex = `packages/${config.libraryName}/lib/${config.libraryName}.js`;
    const componentPath = `${path}/lib/${libName}.js`;
    const storyPath = `stories/${componentName}.stories.js`;
    spinner.succeed();
    spinner.text = 'Generating templates';
    spinner.start();
    const componentCode = component(componentName);
    const storyCode = story({
        componentName,
        componentPath: path,
        url: `https://www.npmjs.com/package/${npmName}`,
        npmName,
    });

    spinner.succeed();
    spinner.text = 'Creating package';
    spinner.start();
    execSync(`lerna create ${npmName} --yes`);
    spinner.succeed();
    console.log(npmName, ' Created!');

    spinner.text = 'Installing dependencies and connecting components';
    spinner.start();
    await new Promise(resolve => setTimeout(resolve, 5000));
    execSync(`lerna add @bluefunctor/library-builder --dev --scope=${npmName}`);
    spinner.succeed();
    spinner.text = 'Adding Scripts to package.json';
    spinner.start();
    const packageJson = JSON.parse(fs.readFileSync(packagePath));
    packageJson.scripts.build = 'library-builder';
    fs.writeFileSync(packagePath, JSON.stringify(packageJson));
    spinner.succeed();
    spinner.text = 'Linking components';
    spinner.start();
    execSync(`lerna add react --dev --scope=${npmName}`);
    execSync(`lerna add react@17.x --peer --scope=${npmName}`);
    spinner.succeed();
    spinner.text = 'Adding component to lib';
    spinner.start();
    execSync(`lerna add ${npmName} --scope=${config.npmOrg}/${config.libraryName}`);
    spinner.succeed();
    spinner.text = 'Initialising files';
    spinner.start();
    fs.appendFileSync(libraryIndex, `export * from '${npmName}';`);
    fs.writeFileSync(componentPath, componentCode);
    spinner.succeed();
    spinner.text = 'Creating Story';
    spinner.start();
    fs.writeFileSync(storyPath, storyCode);
    spinner.succeed();
};

componentNames.map(createComponent);

exports.createComponent = createComponent;
