const { execSync } = require('child_process');
const config = require('../library.json');

if (!config.libraryName || !config.npmOrg ) {
    console.error('ERROR: Please specify libraryName and npmOrg in the /library.json file.');
    process.exit(-1)
}


execSync(`lerna bootstrap`);

execSync(`lerna create ${config.npmOrg}/${config.libraryName} --yes`);
console.log('Library Created!');
