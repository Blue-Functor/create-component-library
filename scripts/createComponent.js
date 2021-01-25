const fs = require('fs');
const { execSync } = require('child_process');
const config = require('../library.json');

const componentNames = process.argv.slice(2);

if (componentNames.length < 1) {
    console.error('ERROR: Please specify component name.');
    process.exit(-1)
}

const createComponent = (name, componentName) => {
    execSync(`lerna create ${name} --yes`);
    console.log(name, ' Created!');
    console.log('Please Wait. Installing dependencies and connecting components...')
    execSync(`lerna add @bluefunctor/library-builder --dev --scope=${name}`);
    const packageJson = JSON.parse(fs.readFileSync(`packages/${config.libraryName}-${componentName}/package.json`));
    packageJson.scripts.build = 'library-builder';
    fs.writeFileSync(`packages/${config.libraryName}-${componentName}/package.json`, JSON.stringify(packageJson));
    execSync(`lerna add react --dev --scope=${name}`);
    execSync(`lerna add react@17.x --peer --scope=${name}`);
    execSync(`lerna add ${name} --scope=${config.npmOrg}/${config.libraryName}`);
    fs.appendFileSync(`packages/${config.libraryName}/lib/${config.libraryName}.js`, `export * from '${name}';`);
};

componentNames.map(name => createComponent(`${config.npmOrg}/${config.libraryName}-${name}`, name));

exports.createComponent = createComponent;
