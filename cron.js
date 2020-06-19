var CronJob = require('cron').CronJob;
// var cmd=require('node-cmd');
var shell = require('shelljs');
 
    var job = new CronJob('0 */30 * * * *', function() {        

    
        // if (shell.exec('yarn cypress:pdxrun').code === 0) {
            shell.exec('yarn clean-reports')
            shell.exec('yarn cypress:pdxrun');
            shell.exec('yarn merge-report');
            shell.exec('yarn move-report');
            // shell.exit(1);
        // }

    }, false, true, 'Europe/London');
    
    job.start();

    //old way
    // var job = new CronJob('0 */1 * * * *', function() {
    //     cmd.run(
    //         'yarn clean-reports',
    //         function(err, data, stderr) {
    //             console.log('----- Starting clean-reports -----\n\n',data)
    //         }
    //     );  
        
    //     cmd.run(
    //         'yarn cypress:cron-run',
    //         function(err, data, stderr) {
    //             console.log('----- Starting cypress:cron-run -----\n\n',data)
    //         }
    //     ); 
    //     cmd.run(
    //         'yarn merge-report',
    //         function(err, data, stderr) {
    //             console.log('----- Starting cypress:merge-report -----\n\n',data)
    //         }
    //     );
    //     cmd.run(
    //         'yarn move-report',
    //         function(err, data, stderr) {
    //             console.log('----- Starting move-report -----\n\n',data)
    //         }
    //     );
    // }, false, true, 'Europe/London');
