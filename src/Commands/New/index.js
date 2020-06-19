var ncp = require('ncp').ncp;
var fs = require('fs');
const { exec } = require('child_process');
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

        let dir = './'+appName;
        if(folder) {
            dir = './'+folder
        } else {
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            } else {
                throw Error('Directory exists');
            }
        }

        

        let source = __dirname+"../../../../templates/application";

        ncp(source, dir, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('application is created');

            exec('cd '+ dir, (err)  => {
                if(err) {
                    throw Error('Something went wrong, please try npm install')
                } else {
                    console.log('installing dependencies')
                    exec('cd '+ dir +' && npm install',(err, stdout, stderr) => {
                        if(err) {
                            console.log('Something went wrong, please try npm install');
                            throw Error(err)
                        } else {
                            console.log(`stdout: ${stdout}`);
                            console.log(`stderr: ${stderr}`);
                        }
                    })
                }
            })
        });
    }
}

module.exports = NewCommand;