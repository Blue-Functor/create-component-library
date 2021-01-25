const { exec } = require('child_process');
const config = require('../library.json');

console.log(process.env);
const args = process.argv.slice(2);

const componentName = args?.[0];

!componentName && console.error('ERROR: Please specify component name.');

//lerna add @bluefunctor/library-builder --dev --scope '{@bluefunctor/library-template-utils,@bluefunctor/library-template-button}'

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(componentName, `stdout: ${stdout}`);
});
