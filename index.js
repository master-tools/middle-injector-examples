'use strict';

// Middle injector is not only for testing, you can use it to inject dependencies and variables in your project.
let middleInjector = require('middle-injector');
let variables = require('./variables');
let dependencies = require('./dependencies');
let app = middleInjector('express', dependencies, variables);

app.listen('9000', () => {
    console.log('Middleware injector listening on port 9000.')
});