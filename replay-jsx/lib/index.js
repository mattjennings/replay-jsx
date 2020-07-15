"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Fragment = exports.create = void 0;

var _core = require("@replay/core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flatMap = function flatMap(arr, fn) {
  return arr.map(fn).reduce(function (x, y) {
    return x.concat(y);
  }, []);
};
/**
 * Creates a Replay element from a JSX tag
 */


var create = function create(tag) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // custom component
  if (typeof tag === 'function') {
    return tag(_objectSpread(_objectSpread({}, props), {}, {
      children: children
    }));
  }

  if (tag === 'fragment') {
    // we need to flatmap incase child is also an array (such as JSX .maps)
    return flatMap(children, function (child) {
      if (Array.isArray(child) && child.length === 0) {
        return null;
      }

      return !!child ? child : null;
    });
  } // replay component


  var el = _core.t[tag];

  if (!el) {
    throw new Error("Element \"".concat(tag, "\" is not a valid Replay component"));
  }

  return el(props);
};

exports.create = create;
var Fragment = 'fragment';
exports.Fragment = Fragment;
var _default = {
  create: create,
  Fragment: Fragment
};
exports["default"] = _default;