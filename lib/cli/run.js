var run = require('../api/run');

module.exports = function () {
    this
        .title('run specified task')
        .helpful()
        .opt()
            .name('dir')
            .title('custom project root')
            .short('d')
            .long('dir')
            .end()
        .opt()
            .name('noCache')
            .title('drop cache before running task')
            .short('n')
            .long('no-cache')
            .flag()
            .end()
        .opt()
            .name('hideWarnings')
            .title('hides warnings')
            .long('hide-warnings')
            .flag()
            .end()
        .opt()
            .name('graph')
            .title('draws build graph')
            .long('graph')
            .flag()
            .end()
        .arg()
            .name('task')
            .title('task name')
            .req()
            .end()
        .arg()
            .name('arguments')
            .title('arguments for task')
            .arr()
            .end()
        .act(function (opts, args) {
            opts.cache = !opts.noCache;

            return run(args.task, args.arguments, opts);
        })
        .end();
};