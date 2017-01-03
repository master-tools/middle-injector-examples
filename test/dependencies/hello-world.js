'use strict';

// This example only have one dependence, it is just a hello world middleware that return that text.
let dependencies = [
    {
        name: 'hello-world',
        instance: helloWorld
    }
];

module.exports = dependencies;