const os = require('os');

export const getServerStats = () => ({
    hostname: os.hostname(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: process.uptime(),
});