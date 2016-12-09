'use strict';

module.exports = (() => {
    return (req, res, next) => {
        return res.status(200).send('Hello world!');
    };
})();