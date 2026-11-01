"use strict";

// minimatch 11 attaches filter, makeRe, match, Minimatch, GLOBSTAR, sep,
// defaults, braceExpand, escape and unescape to the function itself.
// Installed under the name "minimatch", so the patched copy is aliased to
// keep require() from resolving back to this file.
const { minimatch } = require("patched-minimatch");

module.exports = minimatch;
module.exports.minimatch = minimatch;
module.exports.default = minimatch;
