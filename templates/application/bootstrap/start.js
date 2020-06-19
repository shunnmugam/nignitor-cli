const Nignitor = require('nignitor');

const providers = {
    'db'        : 'DbProvider',
    'cas'       : 'CasProvider',
    'session'   : 'SessionProvider'
}

new Nignitor("{{appName}}")
    .setAppRoot(__dirname+'/../')
    .appendProviders(providers)
    .initiateProviders()
    .beforeHttp((app) => {
        console.log('ready to start')
    })
    .afterHttp((app, server) => {
        console.log('server started')
        server.on('error', (e) => {
            console.log('Something went wrong')
        })
    })
    .startServer();