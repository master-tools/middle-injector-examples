'use strict';

let middleInjector = require('middle-injector');
let variables = require('./variables/hello-world');
let dependencies = require('./dependencies/hello-world');
let request = require('supertest');

let app;

describe('Middleware: hello-world', () => {
    before((done) => {
        app = middleInjector('express', dependencies, variables);
        done();
    });

    after((done) => {
        done();
    });

    it('Should return "Hello world!" text when middleware is called.', (done) => {
        request(app)
            .post('/')
            .send()
            .expect(200)
            .expect('Hello world!', done);
    });
});