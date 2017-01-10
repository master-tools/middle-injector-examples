'use strict';

// Get the instance of the middlewares
let hello = require('./middlewares/hello-world');
let printer = require('./middlewares/printer');

// This example only have one dependence, it is just a hello world middleware that return that text.
let dependencies = [
    {
        name: 'hello',
        instance: hello,
        route: '/hello'
    },{
        name: 'printer',
        instance: printer,
        route: '/printer'
    }
];

//Export it to re use it in other test
module.exports = dependencies;