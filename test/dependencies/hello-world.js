'use strict';

// Get the instance of the middleware
let helloWorld = require('../../middlewares/hello-world');

// This example only have one dependence, it is just a hello world middleware that return that text.
let dependencies = [
    {
        name: 'hello-world',
        instance: helloWorld
    }
];

//Export it to re use it in other test
module.exports = dependencies;