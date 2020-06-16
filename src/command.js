/*
 * command
 */

const program = require('commander');
const packegeJson = require('../package.json');


// commands
const NewCommand = require('./Commands/New');

class Command {
    constructor() {
        program
            .version(packegeJson.version)
            .description('Node js framework');
    }

    register() {
        program
            .command('version')
            .alias('v')
            .description('get framework version')
            .action(() => {
                console.info("0.0.1")
            });

        new NewCommand(program)
            .register()

        program.parse(process.argv);
    }
}

module.exports = Command;