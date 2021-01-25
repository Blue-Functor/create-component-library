const { execSync } = require('child_process');
const config = require('../library.json');

const componentNames = process.argv.slice(2);

if (componentNames.length < 1) {
    console.error('ERROR: Please specify component name.');
    process.exit(-1)
}

const createComponent = name => {
    execSync(`lerna create ${name} --yes`);
    console.log(name, ' Created!');
    execSync(` lerna add @bluefunctor/library-builder --dev --scope=${name}`);
    execSync(` lerna add react --dev --scope=${name}`);
    execSync(` lerna add react@17.x --peer --scope=${name}`);
};

componentNames.map(name => createComponent(`${config.npmOrg}/${config.libraryName}-${name}`));

exports.createComponent = createComponent;
