"use strict";

// minimatch 11 attaches filter, makeRe, match, Minimatch, GLOBSTAR, sep,
// defaults, braceExpand, escape and unescape to the function itself.
const { minimatch } = require("minimatch");

module.exports = minimatch;
module.exports.minimatch = minimatch;
module.exports.default = minimatch;
