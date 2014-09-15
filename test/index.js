// Load modules

var Lab = require('lab');
var Hapi = require('hapi');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var expect = Lab.expect;
var before = lab.before;
var after = lab.after;
var describe = lab.describe;
var it = lab.it;


describe('Plugin', function () {

    it('emits ops data', function (done) {

        var server = new Hapi.Server();

        var options = {};

        var plugin = {
           plugin: require('..'),
           options: options
        };

        server.pack.register(plugin, function (err) {

            expect(err).to.not.exist;

            server.plugins.good.monitor.once('ops', function (event) {

                expect(event.osload).to.exist;
                done();
            });
        });
    });
});
