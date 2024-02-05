/**
 * This is the default settings file provided by Node-RED.
 *
 * https://nodered.org/docs/user-guide/runtime/configuration
  **/

module.exports = {
    flowFile: 'flows.json',
    credentialSecret: "${NODERED_ENCRYPTION}",
    flowFilePretty: true,
    userDir: '/data/',
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
            permissions: "*"
        }],
        default: {
            permissions: "read"
        }
    },

    uiPort: process.env.PORT || 1880,

    diagnostics: {
        enabled: true,
        ui: true,
    },
    runtimeState: {
        enabled: false,
        ui: false,
    },
    logging: {
        console: {
            /** fatal, error, warn, info, debug, trace, off  */
            level: "info",
            metrics: false,
            audit: false,
        }
    },
}
