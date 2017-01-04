'use strict';

let middleInjector = require('middle-injector');
let variables = require('./variables/hello-world');
let dependencies = require('./dependencies/hello-world');
let app;

describe('Middleware: Signup', () => {
    before((done) => {
        app = middleInjector('express', dependencies, variables);
        done();
    });

    after((done) => {
        done();
    });

    it('', (done) => {
        done();
    });
});