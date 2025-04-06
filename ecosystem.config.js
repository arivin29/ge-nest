module.exports = {
    apps: [
        {
            name: 'erp-backend',
            script: 'dist/src/main.js',
            instances: 1,
            exec_mode: 'fork',
            watch: false,
            env: {
                NODE_ENV: 'production',
            }
        }
    ]
}
