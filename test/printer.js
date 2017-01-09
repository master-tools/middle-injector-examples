'use strict';

let middleInjector = require('middle-injector');
let variables = require('./variables/printer');
let dependencies = require('./dependencies/printer');
let request = require('supertest');
let app;

describe('Middleware: printer', () => {
    before((done) => {
        app = middleInjector('express', dependencies, variables);
        done();
    });

    after((done) => {
        done();
    });

    it('Should return "Hello Mr. Alberto Iglesias!" text when middleware is called.', (done) => {
        request(app)
            .post('/')
            .send()
            .expect(200)
            .expect('Hello Mr. Alberto Iglesias!', done);
    });
});