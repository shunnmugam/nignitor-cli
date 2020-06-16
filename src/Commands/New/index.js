
class NewCommand {
    constructor(program) {
        this.program = program;
    }

    /*
     * register command
     */
    register() {
        this.program
            .command('new <appName> [folder]')
            .description('get framework version')
            .action((...args) => {
                this.action(...args)
            });
    }

    action(appName, folder) {
        console.log(appName, folder)
    }
}

module.exports = NewCommand;