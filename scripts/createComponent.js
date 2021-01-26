const fs = require('fs');
const { execSync } = require('child_process');
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

const createComponent = componentName => {
    const libName = `${config.libraryName}-${kebabize(componentName)}`;

    const npmName = `${config.npmOrg}/${libName}`
    const path = `packages/${config.libraryName}-${kebabize(componentName)}`;
    const packagePath = `${path}/package.json`;
    const libraryIndex = `packages/${config.libraryName}/lib/${config.libraryName}.js`;
    const componentPath = `${path}/lib/${libName}.js`;
    const storyPath = `stories/${componentName}.stories.js`;

    const componentCode = component(componentName);
    const storyCode = story({
        componentName,
        componentPath: path,
        url: `npm.org/${npmName}`,
        npmName,
    });

    execSync(`lerna create ${npmName} --yes`);
    console.log(npmName, ' Created!');
    console.log('Please Wait. Installing dependencies and connecting components...')
    execSync(`lerna add @bluefunctor/library-builder --dev --scope=${npmName}`);

    const packageJson = JSON.parse(fs.readFileSync(packagePath));
    packageJson.scripts.build = 'library-builder';
    fs.writeFileSync(packagePath, JSON.stringify(packageJson));

    execSync(`lerna add react --dev --scope=${npmName}`);
    execSync(`lerna add react@17.x --peer --scope=${npmName}`);
    execSync(`lerna add ${npmName} --scope=${config.npmOrg}/${config.libraryName}`);

    fs.appendFileSync(libraryIndex, `export * from '${npmName}';`);
    fs.writeFileSync(componentPath, componentCode);
    fs.writeFileSync(storyPath, storyCode);

};

componentNames.map(createComponent);

exports.createComponent = createComponent;
