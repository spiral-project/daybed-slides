"use strict";

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}
exports.clone = clone;

// UUID management
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
}

function uuid4() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}
exports.uuid4 = uuid4;
