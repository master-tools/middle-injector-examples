'use strict';

// Get the instance of the middleware
let printer = require('../../middlewares/printer');

// This example only have one dependence, it is just a hello world middleware that return that text.
let dependencies = [
    {
        name: 'printer',
        instance: printer
    }
];

//Export it to re use it in other test
module.exports = dependencies;