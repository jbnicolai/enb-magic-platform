var coa = require('coa'),
    pkg = require('../../package.json'),
    make = require('./make'),
    run = require('./run'),
    server = require('./server');

coa.Cmd()
    .name('sets')
    .title('BEM sets platform')
    .helpful()
    .opt()
        .name('version')
        .title('version')
        .short('v')
        .long('version')
        .flag()
        .act(function () {
            return pkg.version;
        })
        .end()
    .cmd()
        .name('make')
        .apply(make)
        .end()
    .cmd()
        .name('run')
        .apply(run)
        .end()
    .cmd()
        .name('server')
        .apply(server)
        .end()
    .run(process.argv.slice(2));