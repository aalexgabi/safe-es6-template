'use strict';

const lodashGet = require('lodash.get');

exports.template = function(template, context = {}) {
    return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
        const value = lodashGet(context, p1, '');
        return value === null ? '' : value;
    });
};
