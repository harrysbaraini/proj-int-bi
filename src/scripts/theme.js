var fs = require('fs');
var classes = require('bespoke-classes');

module.exports = function() {
  return function(deck) {
    classes()(deck);
  };
};
