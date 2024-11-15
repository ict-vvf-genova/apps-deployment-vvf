module.exports = {
    flowFile: 'flows.json',
    credentialSecret: process.env.NODERED_SESSION_SECRET,
    flowFilePretty: true,
    userDir: '/data/',
    
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.ADMIN_EMAIL,
            password: process.env.DEFAULT_PASSWORD_HASH.replace("$2y$", "$2b$"),
            permissions: "*"
        }],
    },

    uiPort: 1880,

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
            level: process.env.NODERED_LOGLEVEL,
            metrics: false,
            audit: false,
        }
    },
}
