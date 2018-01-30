const {sortBy: ord} = require('lodash');

exports.sortBy = (collection, column, asc) => asc ?  ord(collection, column) : ord(collection, column).reverse();
exports.formatNumber = number => number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");