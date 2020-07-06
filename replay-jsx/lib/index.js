"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Fragment = exports.create = void 0;

var _core = require("@replay/core");

var flatMap = function flatMap(arr, fn) {
  return arr.map(fn).reduce(function (x, y) {
    return x.concat(y);
  }, []);
};
/**
 * Creates a Replay element from a JSX tag
 */


var create = function create(tag, props) {
  // custom component
  if (typeof tag === "function") {
    return tag(props);
  }

  if (tag === "fragment") {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    // we need to flatmap incase child is also an array (such as JSX .maps)
    return flatMap(children, function (child) {
      if (Array.isArray(child) && child.length === 0) {
        return null;
      }

      return !!child ? child : null;
    });
  } // replay element


  return _core.t[tag](props);
};

exports.create = create;
var Fragment = "fragment";
exports.Fragment = Fragment;
var _default = {
  create: create,
  Fragment: Fragment
};
exports["default"] = _default;