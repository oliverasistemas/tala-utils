"use strict";

var _require = require('lodash'),
    ord = _require.sortBy;

exports.sortBy = function (collection, column, asc) {
    return asc ? ord(collection, column) : ord(collection, column).reverse();
};
exports.formatNumber = function (number) {
    return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
exports.sumCollection = function (col, key) {
    return col.reduce(function (acc, val) {
        return acc + Number(val[key]);
    }, 0);
};