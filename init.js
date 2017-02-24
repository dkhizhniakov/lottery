/**
 * Created by Dima Graebert on 2/22/2017.
 */
const forever = require('forever-monitor');

const appProcess = new (forever.Monitor)('app.js', {
    max: 3,
    watch: true,
    watchDirectory: '.',
});

appProcess.on('exit', () => {
    console.log('app.js has exited after 3 restarts');
});

appProcess.start();