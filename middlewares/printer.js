'use strict';

let gender;
let name;

module.exports = (() => {
    return (req, res, next) => {
        // Perfect example of get parameters from other middlewares.
        gender = req.app.get('gender');
        name = req.app.get('name');

        return res.status(200).send(`Hello ${gender} ${name}!`);
    };
})();