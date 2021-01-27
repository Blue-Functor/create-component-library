const fs = require('fs');
const { execSync } = require('child_process');
const Ora = require('ora');

const config = require('../library.json');

if (!config.libraryName || !config.npmOrg ) {
    console.error('ERROR: Please specify libraryName and npmOrg in the /library.json file.');
    process.exit(-1)
}
const initLib = async () => {
    const spinner = new Ora({
        discardStdin: false,
        text: 'Creating package',
    });
    spinner.color = 'blue';

    spinner.start();
    execSync(`lerna create ${config.npmOrg}/${config.libraryName} --yes`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    spinner.succeed();
    spinner.text = 'Initialising variables';
    spinner.start();
    const libPath = `packages/${config.libraryName}`;
    const packagePath = `${libPath}/package.json`;
    const mainFile = `${libPath}/lib/${config.libraryName}.js`;
    spinner.succeed();
    spinner.text = 'Initialising files';
    spinner.start();

    const packageJson = JSON.parse(fs.readFileSync(packagePath));
    packageJson.description = 'This is the main Library package, all components will be exported from here.';
    packageJson.publishConfig = {access: "public"};
    fs.writeFileSync(packagePath, JSON.stringify(packageJson));

    fs.writeFileSync(mainFile, '');
    spinner.succeed();
    spinner.text = 'Library Created!';
    spinner.start();
    spinner.succeed();
};

initLib();
