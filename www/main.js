(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top navigation -->\n<!-- <nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/register-student\">\n    <img class=\"brand-logo\" src=\"assets/logo-positronx-white.svg\" alt=\"positronX.io Logo\">\n    <span class=\"dasboard-text\">Dashboard</span>\n  </a>\n</nav> -->\n\n<!-- Sidebar navigation -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">\n              <i class=\"fas fa-user\"></i>User Profile\n            </a>\n          </li>\n          <!-- Calling SignOut() Api from AuthService -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Main content -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"inner-adjust\">\n\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\n          <h1 class=\"h2\">User Profile</h1>\n        </div>\n        <!-- Show user data when logged in -->\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\n                alt=\"{{user.displayName}}\">\n              <div class=\"media-body\">\n                <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></h1>\n                <p>User ID: <strong>{{user.uid}}</strong></p>\n                <p>Email: <strong>{{user.email}}</strong></p>\n                <p>Email Verified: <strong>{{user.emailVerified}}</strong></p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </main>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Auth_1/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Auth_1/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n    <div class=\"authBlock\">\n      <h3>Reset Password</h3>\n\n      <p class=\"text-center\">Please enter your email address to request a password reset.</p>\n\n      <div class=\"formGroup\">\n        <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\n      </div>\n\n      <!-- Calling ForgotPassword from AuthService Api -->\n      <div class=\"formGroup\">\n        <input type=\"submit\" class=\"btn btnPrimary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\n      </div>\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <div class=\"px-logo\">\n      <a href=\"https://www.positronx.io\" target=\"_blank\">\n        <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\">\n      </a>\n    </div>\n\n    <div class=\"authBlock\">\n      <h3>Sign In</h3>\n      <div class=\"formGroup\">\n        <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required>\n      </div>\n\n      <!-- Calling SignIn Api from AuthService -->\n      <div class=\"formGroup\">\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\n      </div>\n\n      <div class=\"formGroup\">\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\n      </div>\n\n      <!-- Calling GoogleAuth Api from AuthService -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n          <i class=\"fab fa-google-plus-g\"></i>\n          Log in with Google\n        </button>\n      </div>\n\n      <div class=\"forgotPassword\">\n        <span routerLink=\"/forgot-password\">Forgot Password?</span>\n      </div>\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Don't have an account?<span class=\"redirect\" routerLink=\"/register-user\"> Sign Up</span></span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/Auth_1/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/Auth_1/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <div class=\"px-logo\">\n      <a href=\"https://www.positronx.io\" target=\"_blank\">\n        <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\">\n      </a>\n    </div>\n\n    <div class=\"authBlock\">\n      <h3>Sign Up</h3>\n\n      <div class=\"formGroup\">\n        <input type=\"email\" = class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\n      </div>\n\n      <div class=\"formGroup\">\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\n      </div>\n\n      <!-- Continue with Google -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n          <i class=\"fab fa-google-plus-g\"></i>\n          Continue with Google\n        </button>\n      </div>\n\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.ts ***!
  \****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/Auth_1/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/Auth_1/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <div class=\"px-logo\">\n      <a href=\"https://www.positronx.io\" target=\"_blank\">\n        <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\">\n      </a>\n    </div>\n\n    <div class=\"authBlock\">\n      <h3>Thank You for Registering</h3>\n\n      <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n        <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n        <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n      </div>\n\n      <!-- Calling SendVerificationMail() method using authService Api -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n          <i class=\"fas fa-redo-alt\"></i>\n          Resend Verification Email\n        </button>\n      </div>\n\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/Auth_1/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/Auth_1/components/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['sign-in']);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts ***!
  \*****************************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            window.alert("You are not allowed to access this URL!");
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    SecureInnerPagesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/services/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Auth_1/shared/services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone; // NgZone service to remove outside scope warning
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['search']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth_1/shared/guard/auth.guard */ "./src/app/Auth_1/shared/guard/auth.guard.ts");
/* harmony import */ var _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auth_1/components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
/* harmony import */ var _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Auth_1/components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Auth_1/shared/guard/secure-inner-pages.guard */ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts");
/* harmony import */ var _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Auth_1/components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Auth_1/components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth_1/components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AuthGuard } from "../../shared/guard/auth.guard";


// import { NgModule } from '@angular/core';

// Required components for which route services to be activated



var routes = [
    {
        path: '', redirectTo: '/search', pathMatch: 'full', canActivate: [_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], canActivate: [_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'library',
        component: _library_library_component__WEBPACK_IMPORTED_MODULE_3__["LibraryComponent"], canActivate: [_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    { path: 'sign-in', component: _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"], canActivate: [_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_7__["SecureInnerPagesGuard"]] },
    { path: 'register-user', component: _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"], canActivate: [_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_7__["SecureInnerPagesGuard"]] },
    { path: 'dashboard', component: _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_Auth_1_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'forgot-password', component: _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"], canActivate: [_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_7__["SecureInnerPagesGuard"]] },
    { path: 'verify-email-address', component: _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"], canActivate: [_Auth_1_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_7__["SecureInnerPagesGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar sticky\">\n  <ul class=\"ul-nav\">\n    <li class=\"nav-logo\" style=\"text-align: center\">eBrary</li>\n    <li class=\"nav-section\"><a routerLink=\"search/\">Search</a></li>\n    <li class=\"nav-section\"><a routerLink=\"library/\">Library</a></li>\n    <li class=\"nav-section\"><a routerLink=\"dashboard/\">Dashboard</a></li>\n    <!-- <li class=\"nav-section\">\n      <a (click)=\"authService.SignOut()\">\n        <i class=\"fas fa-sign-out-alt\"></i>Log out\n      </a>\n    </li> -->\n  </ul>  \n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth_1/shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {AuthService}
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pager/pager.component */ "./src/app/pager/pager.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/library.service */ "./src/app/shared/library.service.ts");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/dom.service */ "./src/app/services/dom.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Auth_1/shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Auth_1/components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
/* harmony import */ var _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Auth_1/components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Auth_1/components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Auth_1/components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Auth_1/components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AppRoutingModule1} from './Auth_1/shared/routing/app-routing.module';




// import * as functions from 'firebase-functions'













// Firebase services + enviorment module


// App routing modules
// import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
// Auth service

// import { BrowserModule } from '@angular/platform-browser';


// import { NgModule } from '@angular/core';
// Reactive Form
// import { ReactiveFormsModule } from '@angular/forms';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_11__["PagerComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_13__["LibraryComponent"],
                _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_14__["BookInfoComponent"],
                _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_25__["SignInComponent"],
                _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__["SignUpComponent"],
                _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
                _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordComponent"],
                _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_27__["VerifyEmailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]
            ],
            entryComponents: [_book_info_book_info_component__WEBPACK_IMPORTED_MODULE_14__["BookInfoComponent"], _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"]],
            providers: [_shared_google_books_service__WEBPACK_IMPORTED_MODULE_15__["GoogleBooksService"], _Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _shared_library_service__WEBPACK_IMPORTED_MODULE_16__["LibraryService"], _services_dom_service__WEBPACK_IMPORTED_MODULE_17__["DomService"], _services_modal_service__WEBPACK_IMPORTED_MODULE_18__["ModalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-info/book-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-info/book-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, h5 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: center;\n  padding: 5px;\n}\nh6:first-of-type {\n  margin: 40px auto auto auto;\n}\nh6 {\n  margin: auto auto auto auto;\n}\n.sample-container{\n    display:grid;\n    grid-template-columns: 1fr;\n    border-radius: 3px;\n    overflow: auto;\n    margin-bottom: 20px;\n}\n.sample-text{\n  color: black;\n  margin-top: 5px;\n  font-size: 20px;\n}\n.sample-text-small{\n  color: black;\n  font-size: 14px;\n}\n.sample-close{\n  text-align:center;\n}\n.sample-close button{\n  border-radius: 50%;\n  position: relative;\n  float: right;\n  top: -10px;\n  right: -10px;\n}\n.info-button {\n  display: inline-block;\n  width: 100px;\n  height: 25px;\n  max-width: 300px;\n  margin: auto;\n  margin-left: 15%;\n  margin-right: 10%;\n  background-color: rgb(61, 90, 255);\n  text-align: center;\n  font-size: 14px;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.info-button:hover {\n  background-position: 0 -21px;\n}\n.sample-add{\n  text-align:center;\n}\n.added-message{\n  transition-timing-function: ease;\n  transition-duration: 0.35s;\n  position: absolute;\n  top: 130px;\n  left: 18px;\n  height: 16px;\n  padding: 4px;\n  color: white;\n  border-radius: 5px;\n  background-color: rgb(200, 87, 87);\n  z-index: 15;\n}\n.sample-add button{\n  border-radius: 50%;\n  position: relative;\n  float: right;\n  top: -10px;\n  right: -10px;\n}\n.close-icon{\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: black;\n  z-index: 15;\n  cursor: pointer;\n}\n.add-icon{\n  transition-timing-function: ease;\n  transition-duration: 0.35s;\n  position: absolute;\n  top: 185px;\n  left: 30px;\n  color: rgb(0, 200, 0);\n  border-radius: 50%;\n  background-color: whitesmoke;\n  z-index: 15;\n  cursor: pointer;\n}\n.hovered-add-icon{\n  transition-timing-function: ease;\n  transition-duration: 0.35s;\n  top: 178px;\n  width: 70px;\n  height: 25px;\n  left: 29px;\n  background-color: rgb(0, 200, 0);\n  border-radius: 2px;\n  border: solid 2px green;\n}\n.box-close:before {\n  content: \"×\";\n}\n.book-img {\n  display:block;\n  padding: 10px;\n  min-width: 130px;\n  width: 150px;\n  max-width: 300px;\n  margin: auto;\n  margin-left: 5%;\n  margin-top: 80px;\n  cursor: pointer;\n}\n@-webkit-keyframes MyAnimation {\n  0% {\n      -webkit-transform: scale(1.025);\n              transform: scale(1.025);\n  }\n  100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n  }\n}\n@keyframes MyAnimation {\n  0% {\n      -webkit-transform: scale(1.025);\n              transform: scale(1.025);\n  }\n  100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n  }\n}\n.animated {\n  -webkit-animation: MyAnimation 1s;\n          animation: MyAnimation 1s;\n}\n.pop-thumb {\n  float: left\n}\n.right-text {\n  text-align: justify;\n  margin-left: 275px;\n  margin-right: 30px;\n}\n.category {\n  padding: 4px;\n  display: inline-block;\n  color: white;\n  background-color: black;\n  border-radius: 15px;\n  margin-right: 5px;\n}\n.category:hover {\n  background-color: gray;\n}\n.small-txt {\n  position: relative;\n  top: -8px;\n  font-size: 12px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1pbmZvL2Jvb2staW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFO01BQ0ksK0JBQXVCO2NBQXZCLHVCQUF1QjtFQUMzQjtFQUNBO01BQ0ksMkJBQW1CO2NBQW5CLG1CQUFtQjtFQUN2QjtBQUNGO0FBUEE7RUFDRTtNQUNJLCtCQUF1QjtjQUF2Qix1QkFBdUI7RUFDM0I7RUFDQTtNQUNJLDJCQUFtQjtjQUFuQixtQkFBbUI7RUFDdkI7QUFDRjtBQUNBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2staW5mby9ib29rLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLCBoNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmg2OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDQwcHggYXV0byBhdXRvIGF1dG87XG59XG5oNiB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gYXV0bztcbn1cbi5zYW1wbGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zYW1wbGUtdGV4dHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5zYW1wbGUtdGV4dC1zbWFsbHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2FtcGxlLWNsb3Nle1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5zYW1wbGUtY2xvc2UgYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG59XG4uaW5mby1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDkwLCAyNTUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbmZvLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIxcHg7XG59XG4uc2FtcGxlLWFkZHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uYWRkZWQtbWVzc2FnZXtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMwcHg7XG4gIGxlZnQ6IDE4cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgODcsIDg3KTtcbiAgei1pbmRleDogMTU7XG59XG4uc2FtcGxlLWFkZCBidXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbn1cbi5jbG9zZS1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDE1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWljb257XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4NXB4O1xuICBsZWZ0OiAzMHB4O1xuICBjb2xvcjogcmdiKDAsIDIwMCwgMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgei1pbmRleDogMTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob3ZlcmVkLWFkZC1pY29ue1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XG4gIHRvcDogMTc4cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDI5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDApO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogc29saWQgMnB4IGdyZWVuO1xufVxuLmJveC1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIsOXXCI7XG59XG4uYm9vay1pbWcge1xuICBkaXNwbGF5OmJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5Aa2V5ZnJhbWVzIE15QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uYW5pbWF0ZWQge1xuICBhbmltYXRpb246IE15QW5pbWF0aW9uIDFzO1xufVxuLnBvcC10aHVtYiB7XG4gIGZsb2F0OiBsZWZ0XG59XG4ucmlnaHQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1sZWZ0OiAyNzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmNhdGVnb3J5IHtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNhdGVnb3J5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbi5zbWFsbC10eHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/book-info/book-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-info/book-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.1/css/all.css\" integrity=\"sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ\" crossorigin=\"anonymous\">\n\n<div class=\"sample-container animated\">\n  <div class=\"sample-text\">\n    <h3>{{modalService.book.title}}</h3>\n    <hr/>\n    <div class=\"pop-thumb\">\n        <img align=\"left\" class=\"book-img\" src=\"{{modalService.book.thumbnail}}\" (click)=\"redirectTo(modalService.book.infoLink)\" alt=\"{{modalService.book.title}} cover\">\n        <button class=\"info-button\" (click)=\"redirectTo(modalService.book.infoLink)\"><i class=\"fas fa-plus\"></i> Info</button>\n    </div>\n    <div class=\"right-text\">\n      <ul>\n          <h6>Subtitle:</h6>\n          <p class=\"sample-text-small\">{{modalService.book.subTitle}}</p>\n          <h6>Authors: </h6>\n          <p class=\"sample-text-small\">{{modalService.book.authors}}</p>\n          <h6>Publisher: </h6>\n          <p class=\"sample-text-small\">{{modalService.book.publisher}}</p>\n          <h6>Published Date: </h6>\n          <p class=\"sample-text-small\">{{modalService.book.publishDate}}</p>\n          <h6>Categories: </h6>\n          <p class=\"sample-text-small category\" *ngFor=\"let item of modalService.book.categories\">{{item}}</p>\n          <h6>Description: </h6>\n          <p class=\"sample-text-small\">{{modalService.book.description}}</p>\n        </ul>\n    </div>\n  </div>\n  <div class=\"sample-close\">\n    <i class=\"far fa-times-circle close-icon\" (click)=\"close()\"></i>\n  </div>\n  <div class=\"sample-add\">\n    <a class=\"fa-lg add-icon\" \n    (click)=\"addToLibrary(modalService.book)\"\n    [ngClass]=\"{'hovered-add-icon': hovering, 'fas fa-plus-circle': !hovering}\"\n    (mouseenter) = \"hovering = true\"\n    (mouseleave) = \"hovering = false\"> <p class=\"small-txt\" *ngIf=\"hovering\">Add Book <i style=\"margin-left: 2px\" class=\"fas fa-angle-right\"></i></p> </a>\n  </div>\n  <div class=\"added-message\" *ngIf=\"contains(modalService.book)\">\n    <p class=\"small-txt\" (click)=\"removeFromLibrary(modalService.book)\">Remove from Library</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-info/book-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-info/book-info.component.ts ***!
  \**************************************************/
/*! exports provided: BookInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfoComponent", function() { return BookInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/shared/library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookInfoComponent = /** @class */ (function () {
    function BookInfoComponent(modalService, libraryService) {
        this.modalService = modalService;
        this.libraryService = libraryService;
        this.hovering = false;
    }
    BookInfoComponent.prototype.close = function () {
        this.modalService.destroy();
    };
    BookInfoComponent.prototype.contains = function (book) {
        return this.libraryService.myBooks.includes(book);
    };
    BookInfoComponent.prototype.addToLibrary = function (book) {
        this.libraryService.addBook(book);
    };
    BookInfoComponent.prototype.removeFromLibrary = function (book) {
        this.libraryService.removeBook(book);
    };
    BookInfoComponent.prototype.redirectTo = function (link) {
        console.log("redirect to: ", link);
        window.open(link, '_blank');
    };
    BookInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-info',
            template: __webpack_require__(/*! ./book-info.component.html */ "./src/app/book-info/book-info.component.html"),
            styles: [__webpack_require__(/*! ./book-info.component.css */ "./src/app/book-info/book-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]])
    ], BookInfoComponent);
    return BookInfoComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-container {\n    padding: 2px 16px;\n    color: black;\n    font-size: 12px;\n    font-weight: 4px;\n    text-align: center;\n}\n.book-card {\n    display: inline-block;\n    margin: 10px;\n    width: 200px;\n    border-radius: 5px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    max-width: 250px;\n}\n.book-card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n    cursor: pointer;\n}\n.book-img {\n    padding: 10px;\n    max-width: 150px;\n    display:block;\n    margin: auto;\n}\n.book-info {\n    background-color: lightgray;\n    color: black;\n    font-size: 12px;\n    font-weight: 4px;\n}\na:hover + .book-info {\n    display: block;\n}\n@-webkit-keyframes MyAnimation {\n    0% {\n        opacity: 0.7;\n        margin-left: 10%;\n        -webkit-transform: scale(1.025);\n                transform: scale(1.025);\n    }\n    100% {\n        opacity: 1;\n        margin-left: 10px;\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n@keyframes MyAnimation {\n    0% {\n        opacity: 0.7;\n        margin-left: 10%;\n        -webkit-transform: scale(1.025);\n                transform: scale(1.025);\n    }\n    100% {\n        opacity: 1;\n        margin-left: 10px;\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n.my-animation {\n    -webkit-animation: MyAnimation 1s;\n            animation: MyAnimation 1s;\n}\n.hidden{\n    display:none;\n}\n.show{\n    display:block;\n    margin-bottom: 40px;\n}\n#modal-container {\n    position:absolute;\n    min-height: 300px;\n    left:20%;top:20%;\n    width: 60%;\n    max-width: 1000px;\n    background: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    z-index: 100;\n    border-radius: 3px;\n}\n#overlay {\n    opacity:0.2;\n    filter: alpha(opacity=20);\n    background-color:#000; \n    width:100%; \n    height:100%; \n    z-index:10;\n    top:0; \n    left:0; \n    position:fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLDJCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFYQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQiwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtRQUNqQiwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFFBQVEsQ0FBQyxPQUFPO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsS0FBSztJQUNMLE1BQU07SUFDTixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvb2stY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG59XG4uYm9vay1jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib29rLWltZyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmJvb2staW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDRweDtcbn1cbmE6aG92ZXIgKyAuYm9vay1pbmZvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbkBrZXlmcmFtZXMgTXlBbmltYXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cbi5teS1hbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogTXlBbmltYXRpb24gMXM7XG59XG5cbi5oaWRkZW57XG4gICAgZGlzcGxheTpub25lO1xufVxuLnNob3d7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4jbW9kYWwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBsZWZ0OjIwJTt0b3A6MjAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI292ZXJsYXkge1xuICAgIG9wYWNpdHk6MC4yO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwOyBcbiAgICB3aWR0aDoxMDAlOyBcbiAgICBoZWlnaHQ6MTAwJTsgXG4gICAgei1pbmRleDoxMDtcbiAgICB0b3A6MDsgXG4gICAgbGVmdDowOyBcbiAgICBwb3NpdGlvbjpmaXhlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-href=\"\" class=\"book-card my-animation\" *ngFor=\"let book of googleBooksService.books\" (click)=\"show(book)\">\n  <img class=\"book-img\" src={{book.thumbnail}} alt=\"book-image\">\n  <div class=\"book-container\">\n      <p>{{book.title}}</p>\n  </div>\n</div>\n\n<!-- Custom modal setup -->\n<div id=\"modal-container\" class=\"hidden\"></div>\n<div id=\"overlay\" (click)=\"modalService.destroy()\" class=\"hidden\" ></div>"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookListComponent = /** @class */ (function () {
    function BookListComponent(router, route, googleBooksService, modelService, modalService) {
        this.router = router;
        this.route = route;
        this.googleBooksService = googleBooksService;
        this.modelService = modelService;
        this.modalService = modalService;
    }
    BookListComponent.prototype.show = function (book) {
        var inputs = {
            isMobile: false
        };
        this.modalService.init(_book_info_book_info_component__WEBPACK_IMPORTED_MODULE_5__["BookInfoComponent"], inputs, {}, book);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_google_books_service__WEBPACK_IMPORTED_MODULE_3__["GoogleBooksService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/shared/library.service.ts");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(googleBooksService, router, route, libraryService) {
        var _this = this;
        this.googleBooksService = googleBooksService;
        this.router = router;
        this.route = route;
        this.libraryService = libraryService;
        this.route.params.subscribe(function (params) {
            if (params['bookId']) {
                _this.getBook(params['bookId']);
            }
        });
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent.prototype.getBook = function (bookId) {
    };
    BookComponent.prototype.hasBook = function (book) {
        //TODO
        return true;
    };
    BookComponent.prototype.addBook = function (book) {
        //TODO
    };
    BookComponent.prototype.removeBook = function (book) {
        //TODO
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_google_books_service__WEBPACK_IMPORTED_MODULE_3__["GoogleBooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type:none;\n    margin:0 0 2em 0;\n    padding:0;\n}\nul li {\n    display:inline;\n    margin-right: 30px;\n}\nul li a {\n    font-size: 1.5em;\n}\n.link {\n    color:#fff;\n    text-decoration: underline;\n    font-weight: bold;\n    opacity: 0.8;\n}\n.suggestion {\n    display: inline;\n    opacity: 0.8;\n}\n.link:hover {\n    transition: all .3s ease-in;\n    opacity: 1;\n}\n.subtitle-section {\n    padding-top: 15px;\n    width: 100%;\n    height: 35px;\n    margin-bottom: 20px;\n    border-radius: 3px 3px 0 0;\n}\n.subtitle {\n    font-size: 18px;\n    padding-left: 10px;\n}\n.navbar {\n    background: #57B3F1;\n    padding-top: 10px;\n    width: 100%;\n    height: 35px;\n    margin-bottom: 20px;\n}\n.nav-section {\n    display: inline;\n    padding: 17px 20px 8px 20px;\n    margin: 0;\n}\n.nav-section:hover {\n    transition: all .2s ease-in;\n    background-color: lightblue;\n}\n.container {\n    display: grid;\n    grid-template-columns: auto;\n}\n.container-nav {\n    display: inline-block;\n    grid-template-columns: auto;\n    margin-bottom: 10px\n}\n.col {\n    padding: .4em 1.3em;\n}\n.color-dark {\n    background: #2885C4;\n}\n.color-light {\n    background: #57B3F1;\n}\ninput.txt {\n    border: 0;\n    padding: 1em;\n    width: 80%;\n    border-radius: 3px 3px 0 0;\n}\n.btn {\n    border: 0;\n    display: inline-block;\n    margin-right: 10px;\n    padding:1em 3em;\n    background:#A5F883;\n    color:#003A61;\n    margin-bottom:1em;\n    cursor:pointer;\n    border-radius: 3px;\n}\n.btn:hover {\n    transition: all .2s ease-in;\n    background:rgb(150, 240, 115);\n}\n.life-container {\n    background:#3FA0E1;\n    padding:.5em;\n    font-weight:bold;\n    cursor:pointer;\n}\n.text-center {\n    padding-bottom: 10px;\n}\n.book-container {\n    padding: 2px 16px;\n    color: black;\n    font-size: 12px;\n    font-weight: 4px;\n    text-align: center;\n}\n.book-card {\n    display: inline-block;\n    margin: 10px;\n    width: 200px;\n    border-radius: 5px;\n    background-color: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    max-width: 250px;\n}\n.book-card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n    cursor: pointer;\n}\n.book-img {\n    padding: 10px;\n    max-width: 150px;\n    display:block;\n    margin: auto;\n}\n.book-info {\n    background-color: lightgray;\n    color: black;\n    font-size: 12px;\n    font-weight: 4px;\n}\na:hover + .book-info {\n    display: block;\n}\n@-webkit-keyframes MyAnimation {\n    0% {\n        -webkit-transform: scale(1.025);\n                transform: scale(1.025);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n  }\n@keyframes MyAnimation {\n    0% {\n        -webkit-transform: scale(1.025);\n                transform: scale(1.025);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n  }\n.animated {\n    -webkit-animation: MyAnimation 1s;\n            animation: MyAnimation 1s;\n}\n.my-animation {\n    -webkit-animation: MyAnimation 1s;\n            animation: MyAnimation 1s;\n}\n.hidden{\n    display:none;\n}\n.show{\n    display:block;\n}\n#modal-container {\n    position:absolute;\n    min-height: 300px;\n    margin-bottom: 20px;\n    left:20%;top:20%;\n    width: 60%;\n    max-width: 1000px;\n    background: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    z-index: 100;\n    border-radius: 3px;\n}\n#overlay {\n    opacity:0.2;\n    filter: alpha(opacity=20);\n    background-color:#000; \n    width:100%; \n    height:100%; \n    z-index:10;\n    top:0; \n    left:0; \n    position:fixed;\n}\n.search-result li {\n    display: block;\n    background-color: white;\n    color: black;\n    font-size: 14px;\n    height: 16px;\n    padding: 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: pointer;\n    list-style-type: none;\n    margin-right: 0;\n    border-bottom: rgb(238, 238, 238);\n  }\n.search-result li:last-of-type {\n      border-radius: 0 0 5px 5px;\n  }\n.search-result li:hover {\n    background-color: rgb(240, 240, 240);\n  }\n.search-result li a {\n    display: block;\n    text-decoration: none;\n  }\n.search-result li a:hover {\n    color: white;\n  }\n.search-result li a:active {\n    color: white;\n  }\nul.search-result {\n    margin-top: 0;\n    width: 80%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0I7QUFDSjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtFQUNGO0FBUEY7SUFDSTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2QjtFQUNGO0FBQ0Y7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixRQUFRLENBQUMsT0FBTztJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLEtBQUs7SUFDTCxNQUFNO0lBQ04sY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUNBQWlDO0VBQ25DO0FBRUE7TUFDSSwwQkFBMEI7RUFDOUI7QUFFQTtJQUNFLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUNBQXVDO0VBQ3pDIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgbWFyZ2luOjAgMCAyZW0gMDtcbiAgICBwYWRkaW5nOjA7XG59XG51bCBsaSB7XG4gICAgZGlzcGxheTppbmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxudWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5saW5rIHtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cbi5zdWdnZXN0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgb3BhY2l0eTogMC44O1xufVxuLmxpbms6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAxO1xufVxuLnN1YnRpdGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xufVxuLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogIzU3QjNGMTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5uYXYtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDE3cHggMjBweCA4cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubmF2LXNlY3Rpb246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbn1cbi5jb250YWluZXItbmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cbi5jb2wge1xuICAgIHBhZGRpbmc6IC40ZW0gMS4zZW07XG59XG4uY29sb3ItZGFyayB7XG4gICAgYmFja2dyb3VuZDogIzI4ODVDNDtcbn1cbi5jb2xvci1saWdodCB7XG4gICAgYmFja2dyb3VuZDogIzU3QjNGMTtcbn1cbmlucHV0LnR4dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xufVxuLmJ0biB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzoxZW0gM2VtO1xuICAgIGJhY2tncm91bmQ6I0E1Rjg4MztcbiAgICBjb2xvcjojMDAzQTYxO1xuICAgIG1hcmdpbi1ib3R0b206MWVtO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5idG46aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICBiYWNrZ3JvdW5kOnJnYigxNTAsIDI0MCwgMTE1KTtcbn1cbi5saWZlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDojM0ZBMEUxO1xuICAgIHBhZGRpbmc6LjVlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLnRleHQtY2VudGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5ib29rLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnB4IDE2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib29rLWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuLmJvb2stY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9vay1pbWcge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5ib29rLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0cHg7XG59XG5hOmhvdmVyICsgLmJvb2staW5mbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5Aa2V5ZnJhbWVzIE15QW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbi5hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uOiBNeUFuaW1hdGlvbiAxcztcbn1cbi5teS1hbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbjogTXlBbmltYXRpb24gMXM7XG59XG5cbi5oaWRkZW57XG4gICAgZGlzcGxheTpub25lO1xufVxuLnNob3d7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsZWZ0OjIwJTt0b3A6MjAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI292ZXJsYXkge1xuICAgIG9wYWNpdHk6MC4yO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwOyBcbiAgICB3aWR0aDoxMDAlOyBcbiAgICBoZWlnaHQ6MTAwJTsgXG4gICAgei1pbmRleDoxMDtcbiAgICB0b3A6MDsgXG4gICAgbGVmdDowOyBcbiAgICBwb3NpdGlvbjpmaXhlZDtcbn1cbi5zZWFyY2gtcmVzdWx0IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0IGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgdWwuc2VhcmNoLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-light\">\n    <div class=\"subtitle-section color-dark\">\n        <span class=\"subtitle\">My eBrary</span>\n    </div>\n    <div class=\"container-nav\">\n      <form class=\"form-inline\" (ngSubmit)=\"search(searchBox.value, 13)\">\n        <p>Looking for an specific book? (v2.0)</p>\n        <div class=\"form-group\">\n          <input #searchBox\n                 id=\"search-box\"\n                 (keyup)=\"search(searchBox.value, $event.keyCode)\"\n                 type=\"search\"\n                 class=\"txt form-control\"\n                 placeholder=\"Search...\"\n                 name=\"search\"\n                 autocomplete=\"off\"\n                 value=\"{{inputContent}}\"\n                 required\n                 />\n          <ul class=\"search-result\" (clickOutside)=\"closeAutocomplete()\">\n            <li *ngFor=\"let book of books$ | async  | slice:0:10;\" (click)=\"specificSearch(book.title)\" >\n              {{book.title}}\n            </li>\n          </ul>\n        </div>\n        <button type=\"submit\"\n                class=\"btn\"\n                (click)=\"filter(searchBox.value)\">\n          Search\n        </button>\n        <button type=\"submit\" class=\"btn\" (click)=\"clearFilter()\" style=\"background-color: rgb(255, 206, 116);\">\n          Clear Filter\n        </button>\n      </form>\n    </div>\n    <hr />\n    <div class=\"container-nav\" style=\"padding-top: 13px\">\n      <div class=\"text-center\" *ngIf=\"libraryService.myBooks.length == 0\">\n        <!-- TODO: Show when library is empty -->\n        <p class=\"suggestion\">Your library is actually empty. Try </p>\n        <a class=\"link\" routerLink=\"/search/\">Searching new eBooks!</a>\n      </div>\n\n      <div ng-href=\"\" class=\"book-card my-animation\" *ngFor=\"let book of libraryService.filteredBooks\" (click)=\"show(book)\">\n        <img class=\"book-img\" src={{book.thumbnail}} alt=\"book-image\">\n        <div class=\"book-container\">\n            <p>{{book.title}}</p>\n        </div>\n      </div>\n  \n      <div class=\"d-flex justify-content-center\">\n        <!-- TODO: Show pagnation -->\n        <app-pager *ngIf=\"searchFinish\">\n        </app-pager>\n      </div>\n  </div>  \n</div>\n\n<!-- Custom modal setup -->\n<div id=\"modal-container\" class=\"hidden\"></div>\n<div id=\"overlay\" (click)=\"modalService.destroy()\" class=\"hidden\" ></div>\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/shared/library.service.ts");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(libraryService, modalService) {
        this.libraryService = libraryService;
        this.modalService = modalService;
        this.searchFinish = false;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.inputContent = '';
    }
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) { return _this.libraryService.findInLibrary(term); }));
    };
    LibraryComponent.prototype.show = function (book) {
        var inputs = {
            isMobile: false
        };
        this.modalService.init(_book_info_book_info_component__WEBPACK_IMPORTED_MODULE_2__["BookInfoComponent"], inputs, {}, book);
    };
    LibraryComponent.prototype.search = function (bookName, keyCode) {
        if (keyCode == 13 || keyCode == 0) {
            this.specificSearch(bookName);
            this.searchTerms.next('');
            return;
        }
        this.searchTerms.next(bookName);
        this.filter(bookName);
    };
    LibraryComponent.prototype.clearFilter = function () {
        this.inputContent = '';
        this.libraryService.clearFilter();
        this.closeAutocomplete();
    };
    LibraryComponent.prototype.filter = function (term) {
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300);
        this.inputContent = term;
        this.libraryService.filterBooks(term);
    };
    LibraryComponent.prototype.specificSearch = function (term) {
        this.closeAutocomplete();
        this.inputContent = term;
        this.libraryService.filterBooks(term);
    };
    LibraryComponent.prototype.closeAutocomplete = function () {
        this.searchTerms.next('');
    };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_library_service__WEBPACK_IMPORTED_MODULE_1__["LibraryService"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/media/no-image.png":
/*!************************************!*\
  !*** ./src/app/media/no-image.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "no-image.png";

/***/ }),

/***/ "./src/app/pager/page.ts":
/*!*******************************!*\
  !*** ./src/app/pager/page.ts ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(num) {
        this.num = num;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/pager/pager.component.css":
/*!*******************************************!*\
  !*** ./src/app/pager/pager.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pager-container {\n    text-align: center;\n}\n.pager-list {\n    display: inline-block;\n}\nli {\n    list-style-type: none;\n    display: inline-block;\n}\n.pager-item {\n    font-size: 20px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n.pager-item:hover {\n    cursor: pointer;\n}\n.selected-page {\n    color: rgb(43, 247, 43);\n    font-size: 25px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXIvcGFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXIvcGFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlci1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlci1saXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYWdlci1pdGVtIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBhZ2VyLWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3RlZC1wYWdlIHtcbiAgICBjb2xvcjogcmdiKDQzLCAyNDcsIDQzKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pager/pager.component.html":
/*!********************************************!*\
  !*** ./src/app/pager/pager.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pager-container\" *ngIf=\"searchFinish\">\n    <ul class=\"pager-list\" *ngFor=\"let page of pager; let i=index\">\n      <a class=\"pager-item\" \n         *ngIf=\"actualPage+i != 0 && page.num != totalPages\"\n         (click)=\"getPage(page.num)\"\n         [ngClass]=\"{'selected-page': page.num == actualPage}\">{{page.num}}</a>\n    </ul>\n    <ul class=\"pager-list\">\n        <a class=\"pager-item\" style=\"cursor: default\">...</a>\n    </ul>\n    <ul class=\"pager-list\">\n        <a class=\"pager-item\" \n          *ngIf=\"actualPage+i-1 != 0\" \n          (click)=\"getPage(totalPages)\">{{totalPages}}</a>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/pager/pager.component.ts":
/*!******************************************!*\
  !*** ./src/app/pager/pager.component.ts ***!
  \******************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/app/pager/page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagerComponent = /** @class */ (function () {
    function PagerComponent(googleBooksService) {
        this.googleBooksService = googleBooksService;
        this.searchFinish = false;
        this.actualPage = 1;
        this.term = '';
        this.pageAmount = 0;
        this.maxPagItems = 9;
        this.pager = [];
    }
    PagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageAmount = 0;
        this.googleBooksService.hasEnded().subscribe(function (value) {
            _this.searchFinish = value;
            if (_this.searchFinish) {
                _this.initPager();
            }
        });
    };
    PagerComponent.prototype.initPager = function () {
        // If is a new search reset var.
        if (this.term != this.googleBooksService.query) {
            this.pager = [];
            this.pageAmount = 0;
            this.totalPages = Math.trunc(this.googleBooksService.totalPages - (this.googleBooksService.totalPages / 10));
            this.term = this.googleBooksService.query;
            this.getPage(1);
        }
        // Hide left page every 2 pages.
        if (this.actualPage > 2 && !this.goingBack()) {
            this.pager.shift();
        }
        this.checkMaxPag();
        for (var page = this.actualPage; page <= this.lastPage; page++) {
            if (this.pager.length < page) {
                this.pageAmount++;
                this.pager.push(new _page__WEBPACK_IMPORTED_MODULE_2__["Page"](this.pageAmount));
            }
        }
        this.checkGoingBack();
        this.checkGoingForward();
    };
    PagerComponent.prototype.getPage = function (num) {
        var minPages = 0;
        var maxPages = 10;
        if (num < 0 && num > this.totalPages) {
            return;
        }
        // var > const
        if (minPages < num && num <= this.totalPages) {
            this.actualPage = num;
            this.googleBooksService.changePage(num);
        }
    };
    // Set the Pager max size to maxPageItems or totalPages.
    PagerComponent.prototype.checkMaxPag = function () {
        this.lastPage = this.totalPages;
        if (this.totalPages > this.maxPagItems) {
            this.lastPage = this.maxPagItems;
        }
    };
    PagerComponent.prototype.checkGoingBack = function () {
        if (this.goingBack()) {
            this.pager.unshift(new _page__WEBPACK_IMPORTED_MODULE_2__["Page"](this.actualPage - 1));
            if (this.pager.length > this.maxPagItems) {
                this.pageAmount--;
                this.pager.pop();
            }
        }
    };
    PagerComponent.prototype.checkGoingForward = function () {
        if (this.goingMaxPage() && this.actualPage + 1 < this.totalPages) {
            this.pageAmount++;
            this.pager.push(new _page__WEBPACK_IMPORTED_MODULE_2__["Page"](this.actualPage + 1));
            if (this.pager.length > this.maxPagItems) {
                this.pageAmount--;
                this.pager.shift();
            }
        }
    };
    PagerComponent.prototype.goingBack = function () {
        return this.actualPage == this.pager[0].num && this.actualPage != 1;
    };
    PagerComponent.prototype.goingMaxPage = function () {
        return this.actualPage == this.pager[this.pager.length - 1].num && this.actualPage != 1;
    };
    PagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pager',
            template: __webpack_require__(/*! ./pager.component.html */ "./src/app/pager/pager.component.html"),
            styles: [__webpack_require__(/*! ./pager.component.css */ "./src/app/pager/pager.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_google_books_service__WEBPACK_IMPORTED_MODULE_1__["GoogleBooksService"]])
    ], PagerComponent);
    return PagerComponent;
}());

/*
console.log('First num:', this.pager[0].num);
if (this.pager[0].num == page && page != 1) {
  console.log('Go back', 'Page:', page, 'Actual Page:', this.actualPage);
  if (page >= 2) {
    console.log('Adding to beggining', this.actualPage-1);
    this.pager.unshift(new Page(this.actualPage-1));
  }
  console.log('PagerLen:', this.pager.length, 'maxPagerItems:', this.maxPagItems);
  if (this.pager.length == this.maxPagItems) {
    console.log('Popping:', this.pager.pop());
    
    this.pageAmount--;
  }
  console.log(this.pager);
}
*/ 


/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type:none;\n    margin:0 0 2em 0;\n    padding:0;\n}\nul li {\n    display:inline;\n    margin-right: 30px;\n}\nul li a {\n    font-size: 1.5em;\n}\na {\n    color:#fff;\n    text-decoration:none;\n}\n.subtitle-section {\n    padding-top: 15px;\n    width: 100%;\n    height: 35px;\n    margin-bottom: 20px;\n    border-radius: 3px 3px 0 0;\n}\n.subtitle {\n    font-size: 18px;\n    padding-left: 10px;\n}\n.navbar {\n    background: #57B3F1;\n    padding-top: 10px;\n    width: 100%;\n    height: 35px;\n    margin-bottom: 20px;\n}\n.container {\n    display: grid;\n    grid-template-columns: auto;\n    border-radius: 3px;\n}\n.container-nav {\n    display: grid;\n    grid-template-columns: auto;\n    border-radius: 5px;\n}\n.col {\n    padding: .4em 1.3em;\n}\n.color-dark {\n    background: #2885C4;\n}\n.color-light {\n    background: #57B3F1;\n}\ninput.txt {\n    background-color: whitesmoke;\n    border: 0;\n    padding: 1em;\n    width: 80%;\n    max-width: 80%;\n    border-radius: 3px;\n}\n.btn {\n    border: 0;\n    display:inline-block;\n    margin-right: 10px;\n    padding:1em 3em;\n    background:#A5F883;\n    color:#003A61;\n    margin-top: 2em;\n    margin-bottom:1em;\n    cursor:pointer;\n    border-radius: 3px;\n}\n.btn:hover {\n    transition: all .2s ease-in;\n    background:rgb(150, 240, 115);\n}\n.life-container {\n    background:#3FA0E1;\n    padding:.5em;\n    font-weight:bold;\n    cursor:pointer;\n}\n.alert {\n    font-size: 12px;\n    margin-top: 10px;\n}\n.search-result li {\n    display: block;\n    background-color: white;\n    color: black;\n    font-size: 14px;\n    height: 16px;\n    padding: 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: pointer;\n    list-style-type: none;\n    margin-right: 0;\n    border-bottom: rgb(238, 238, 238);\n  }\n.search-result li:last-of-type {\n      border-radius: 0 0 5px 5px;\n  }\n.search-result li:hover {\n    background-color: rgb(240, 240, 240);\n    font-weight: 90;\n  }\n.search-result li a {\n    display: block;\n    text-decoration: none;\n  }\n.search-result li a:hover {\n    color: black;\n  }\n.search-result li a:active {\n    color: white;\n  }\nul.search-result {\n    margin-top: 0;\n    width: 80%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\nul li a {\n      font-size: 14px;\n  }\nli a {\n      color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQ0FBaUM7RUFDbkM7QUFFQTtNQUNJLDBCQUEwQjtFQUM5QjtBQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7RUFDakI7QUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztBQUVBO01BQ0ksZUFBZTtFQUNuQjtBQUVBO01BQ0ksWUFBWTtFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICBtYXJnaW46MCAwIDJlbSAwO1xuICAgIHBhZGRpbmc6MDtcbn1cbnVsIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG51bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuYSB7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5zdWJ0aXRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbn1cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICM1N0IzRjE7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uY29udGFpbmVyLW5hdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbCB7XG4gICAgcGFkZGluZzogLjRlbSAxLjNlbTtcbn1cbi5jb2xvci1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjg4NUM0O1xufVxuLmNvbG9yLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjNTdCM0YxO1xufVxuaW5wdXQudHh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6MWVtIDNlbTtcbiAgICBiYWNrZ3JvdW5kOiNBNUY4ODM7XG4gICAgY29sb3I6IzAwM0E2MTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbToxZW07XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgIGJhY2tncm91bmQ6cmdiKDE1MCwgMjQwLCAxMTUpO1xufVxuLmxpZmUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiMzRkEwRTE7XG4gICAgcGFkZGluZzouNWVtO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG4uYWxlcnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlYXJjaC1yZXN1bHQgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICB9XG5cbiAgLnNlYXJjaC1yZXN1bHQgbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICB9XG4gIFxuICAuc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgdWwuc2VhcmNoLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgfVxuXG4gIHVsIGxpIGEge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgbGkgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.1/css/all.css\" integrity=\"sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ\" crossorigin=\"anonymous\">\n\n<div class=\"container color-light\">\n  <div class=\"subtitle-section color-dark\">\n      <span class=\"subtitle\">Search your eBook</span>\n  </div>\n  <div class=\"container-nav\">\n    <form #f=\"ngForm\" class=\"form-inline\" (ngSubmit)=\"doSearch()\">\n      <p>Introduce a book to start your search!</p>\n      <div class=\"form-group\">\n        <input type=\"search\"\n               #searchBox \n               id=\"search-box\" \n               (keyup)=\"search(searchBox.value, $event.keyCode)\"\n               class=\"form-control txt\"\n               placeholder=\"Search...\"\n               name=\"search\"\n               [(ngModel)]=\"term\"\n               value=\"{{inputContent}}\"\n               autocomplete=\"off\"\n               required\n               />\n      </div>\n      <div id=\"autocomplete\">\n        <ul class=\"search-result\" (clickOutside)=\"closeAutocomplete()\">\n          <li *ngFor=\"let book of books$ | async | slice:0:5\" >\n            <a (click)=\"specificSearch(book.title)\">\n              {{book.title}}\n            </a>\n          </li>\n        </ul>\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary\"\n              [disabled]=\"!f.valid\">\n        Search\n      </button>\n      <button type=\"submit\" class=\"btn\" (click)=\"clearFilter()\" style=\"background-color: rgb(255, 206, 116);\">\n        Clear Filter\n      </button>\n    </form>\n  </div>\n  <hr/>\n  <div class=\"container-nav\">\n    <div class=\"text-center\">\n      <p class=\"lead\" *ngIf=\"googleBooksService.loading\">Loading <i class=\"fa fa-spinner fa-spin fa-fw\"></i></p>\n      <p class=\"lead\" *ngIf=\"!googleBooksService.haveBooks\">Sorry, no results found... :(</p>\n      <p class=\"lead\" *ngIf=\"googleBooksService.books?.length > 0\">\n        Found {{ googleBooksService.totalResults }} results in {{ googleBooksService.enlapsedTime }} sec.\n      </p>\n    </div>\n  \n    <!-- TODO: Show the results of the search -->\n    <app-book-list></app-book-list>\n\n    <div class=\"d-flex justify-content-center\">\n      <!-- TODO: Show pagnation -->\n      <app-pager>\n      </app-pager>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, route, googleBooksService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.googleBooksService = googleBooksService;
        this.term = "";
        this.inputContent = '';
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.route.params.subscribe(function (param) {
            if (param['term']) {
                _this.onSearch(param['term']);
            }
        });
    }
    // Start GoogleBooks Search
    SearchComponent.prototype.doSearch = function () {
        this.closeAutocomplete();
        this.router.navigate(['search', { term: this.term }]); // Change URL.
    };
    // Click on Autocomplete search
    SearchComponent.prototype.specificSearch = function (term) {
        this.inputContent = term;
        this.closeAutocomplete();
        this.router.navigate(['search', { term: term }]); // Change URL.
    };
    // GoogleBooksSearch
    SearchComponent.prototype.onSearch = function (term) {
        var search = this.googleBooksService.searchBooks(term);
    };
    // Autocomplete search
    SearchComponent.prototype.search = function (term, keyCode) {
        if (keyCode == 13 || keyCode == 0) {
            this.searchTerms.next('');
            return;
        }
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.clearFilter = function () {
        this.term = '';
    };
    SearchComponent.prototype.closeAutocomplete = function () {
        this.search('', 13);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.googleBooksService.getBooks(term); }));
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_google_books_service__WEBPACK_IMPORTED_MODULE_2__["GoogleBooksService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/dom.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dom.service.ts ***!
  \*****************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentTo = function (parentId, child, childConfig) {
        // Create a component reference from the component 
        var childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector);
        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);
        // Get DOM element from component
        var childDomElem = childComponentRef.hostView
            .rootNodes[0];
        // Append DOM element to the body
        document.getElementById(parentId).appendChild(childDomElem);
    };
    DomService.prototype.removeComponent = function () {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    };
    DomService.prototype.attachConfig = function (config, componentRef) {
        var inputs = config.inputs;
        var outputs = config.outputs;
        for (var key in inputs) {
            componentRef.instance[key] = inputs[key];
        }
        for (var key in outputs) {
            componentRef.instance[key] = outputs[key];
        }
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.service */ "./src/app/services/dom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService(domService) {
        this.domService = domService;
        this.modalElementId = 'modal-container';
        this.overlayElementId = 'overlay';
    }
    ModalService.prototype.init = function (component, inputs, outputs, book) {
        var componentConfig = {
            inputs: inputs,
            outputs: outputs
        };
        this.book = book;
        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        document.getElementById(this.modalElementId).className = 'show';
        document.getElementById(this.overlayElementId).className = 'show';
    };
    ModalService.prototype.destroy = function () {
        this.domService.removeComponent();
        document.getElementById(this.modalElementId).className = 'hidden';
        document.getElementById(this.overlayElementId).className = 'hidden';
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/book.ts":
/*!********************************!*\
  !*** ./src/app/shared/book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, title, subTitle, authors, publisher, publishDate, description, categories, thumbnail, smallThumbnail, infoLink) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.authors = authors;
        this.publisher = publisher;
        this.publishDate = publishDate;
        this.description = description;
        this.categories = categories;
        this.thumbnail = thumbnail;
        this.smallThumbnail = smallThumbnail;
        this.infoLink = infoLink;
    }
    Book.prototype.checkCorrectness = function () {
        this.checkIdUndefined(this.id);
        this.checkTitleUndefined(this.title);
        this.checkSubtitleUndefined(this.subTitle);
        this.checkAuthorsUndefined(this.authors);
        this.checkPublisherUndefined(this.publisher);
        this.checkPublishDateUndefined(this.publishDate);
        this.checkDescUndefined(this.description);
        this.checkCategoriesUndefined(this.categories);
        this.checkLinkUndefined(this.infoLink);
    };
    // Default text checker
    Book.prototype.checkIdUndefined = function (id) {
        if (id != undefined) {
            return;
        }
        this.id = 'Not defined';
    };
    // Titles checker
    Book.prototype.checkTitleUndefined = function (term) {
        if (term != undefined) {
            this.title = term.split(" ").splice(0, 15).join(" ");
            return;
        }
        this.title = 'Not defined';
    };
    // Default text checker
    Book.prototype.checkSubtitleUndefined = function (subTitle) {
        if (subTitle != undefined) {
            return;
        }
        this.subTitle = 'Not defined';
    };
    // Default text checker
    Book.prototype.checkAuthorsUndefined = function (authors) {
        if (authors != undefined) {
            return;
        }
        this.authors = [];
        this.authors.push('Not defined');
    };
    // Default text checker
    Book.prototype.checkPublisherUndefined = function (publisher) {
        if (publisher != undefined) {
            return;
        }
        this.publisher = 'Not defined';
    };
    // Default text checker
    Book.prototype.checkPublishDateUndefined = function (publishDate) {
        if (publishDate != undefined) {
            return;
        }
        this.publishDate = 'Not defined';
    };
    // Default text checker
    Book.prototype.checkDescUndefined = function (desc) {
        if (desc != undefined) {
            return;
        }
        this.description = 'Not defined';
    };
    // Default text checker
    Book.prototype.checkCategoriesUndefined = function (categories) {
        if (categories != undefined) {
            return;
        }
        this.categories = [];
        this.categories.push('Not defined');
    };
    // Links checker
    Book.prototype.checkLinkUndefined = function (link) {
        if (link != undefined) {
            return;
        }
        this.infoLink = '#';
    };
    return Book;
}());



/***/ }),

/***/ "./src/app/shared/google-books.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/google-books.service.ts ***!
  \************************************************/
/*! exports provided: GoogleBooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleBooksService", function() { return GoogleBooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoogleBooksService = /** @class */ (function () {
    function GoogleBooksService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
        this.loading = false;
        this.haveBooks = true;
        this.initialised = false;
        this.active = false;
        this.totalItems = 0;
        this._page = 1;
        this.pageSize = 10;
        this.query = "";
        this.imageNotFound = __webpack_require__(/*! ../media/no-image.png */ "./src/app/media/no-image.png");
        this.ended = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    Object.defineProperty(GoogleBooksService.prototype, "startIndex", {
        get: function () {
            return (this._page - 1) * this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleBooksService.prototype, "totalPages", {
        get: function () {
            try {
                return Math.ceil(this.totalItems / this.pageSize);
            }
            catch (e) {
                console.error(e);
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleBooksService.prototype, "page", {
        get: function () {
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    GoogleBooksService.prototype.changePage = function (num) {
        if (num != this._page) {
            this._page = num;
            this.searchBooks(this.query);
        }
    };
    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
        var _this = this;
        this.ended.next(false);
        this.query = queryTitle;
        this.loading = true;
        var initialTime = window.performance.now();
        this.initialised = true;
        this.books = [];
        this.http.get(this.API_PATH + "?q=" + this.query + "&maxResults=" + this.pageSize + "&startIndex=" + this.startIndex)
            .map(function (res) { return res.json(); })
            .do(function (data) {
            _this.totalItems = data.totalItems;
        })
            .map(function (data) {
            _this.totalResults = data.totalItems ? data.totalItems : []; // GET totalResults
            return data.items ? data.items : []; // GET 10 firsts books
        })
            .map(function (items) {
            return items.map(function (item) { return _this.bookFactory(item); });
        })
            .do(function (_) { return _this.loading = false; })
            .do(function (_) { return (_this.enlapsedTime = (Math.round((window.performance.now() - initialTime)) / 1000)); })
            .subscribe(function (books) {
            _this.haveBooks = books.length != 0;
            if (_this.haveBooks) {
                _this.books = books;
            }
            _this.ended.next(true);
        });
    };
    GoogleBooksService.prototype.hasEnded = function () {
        return this.ended.asObservable();
    };
    GoogleBooksService.prototype.updateBooksAmount = function () {
        if (this.books.length == 0) {
            this.haveBooks = false;
            alert("Have No Books");
        }
    };
    GoogleBooksService.prototype.bookFactory = function (item) {
        var book;
        var images = item.volumeInfo.imageLinks;
        images = this.checkThumbnailUndefined(images);
        book = new _book__WEBPACK_IMPORTED_MODULE_2__["Book"](item.id, item.volumeInfo.title, item.volumeInfo.subtitle, item.volumeInfo.authors, item.volumeInfo.publisher, item.volumeInfo.publishedDate, item.volumeInfo.description, item.volumeInfo.categories, images[0], images[1], item.volumeInfo.infoLink);
        book.checkCorrectness();
        return book;
    };
    GoogleBooksService.prototype.checkThumbnailUndefined = function (image) {
        if (image == undefined) {
            return [this.imageNotFound, this.imageNotFound];
        }
        return [image.thumbnail, image.smallThumbnail];
    };
    // Autocomplete - code
    GoogleBooksService.prototype.getBooks = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if no search term, return empty array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        return this.http.get(this.API_PATH + "?q=" + term + "&maxResults=" + this.pageSize + "&startIndex=" + this.startIndex)
            .map(function (res) { return res.json(); }) //Map response as JSON.
            .map(function (data) {
            return data.items ? data.items : [];
        })
            .map(function (items) {
            return items.map(function (item) { return _this.bookFactory(item); });
        });
    };
    GoogleBooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GoogleBooksService);
    return GoogleBooksService;
}());



/***/ }),

/***/ "./src/app/shared/library.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/library.service.ts ***!
  \*******************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.myBooks = [];
        this.filteredBooks = [];
    }
    LibraryService.prototype.save = function () {
        localStorage.setItem('myBooks', JSON.stringify(this.myBooks));
    };
    LibraryService.prototype.load = function () {
        var _this = this;
        var stored = JSON.parse(localStorage.getItem('myBooks'));
        JSON.parse(localStorage.getItem('myBooks')).forEach(function (element) {
            _this.myBooks.push(new _book__WEBPACK_IMPORTED_MODULE_1__["Book"](element.id, element.title, element.subTitle, element.authors, element.publisher, element.publishDate, element.description, element.categories, element.thumbnail, element.smallThumbnail, element.infoLink));
        });
    };
    LibraryService.prototype.addBook = function (book) {
        if (book != undefined && !this.hasBook(book)) {
            this.myBooks.push(book);
            this.filteredBooks.push(book);
        }
    };
    LibraryService.prototype.removeBook = function (book) {
        var index = this.myBooks.indexOf(book);
        if (index !== -1) {
            this.myBooks.splice(index, 1);
            this.filteredBooks.splice(index, 1);
        }
    };
    LibraryService.prototype.findInLibrary = function (term) {
        var _this = this;
        var partialResult = [];
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            partialResult = _this.filterArrayUsing(_this.myBooks, term);
            observer.next(partialResult);
        });
        return result;
    };
    LibraryService.prototype.hasBook = function (book) {
        return this.myBooks.includes(book);
    };
    LibraryService.prototype.indexOf = function (book) {
        return this.myBooks.indexOf(book);
    };
    LibraryService.prototype.filterBooks = function (term) {
        if (term == '') {
            this.filteredBooks = this.myBooks.slice();
        }
        else {
            this.filteredBooks = this.filterArrayUsing(this.myBooks, term);
        }
    };
    LibraryService.prototype.clearFilter = function () {
        this.filteredBooks = this.myBooks.slice();
    };
    //No indexOf == ++speed
    LibraryService.prototype.filterArrayUsing = function (stream, term) {
        var partialResult = [];
        this.myBooks.forEach(function (book) {
            if (book.title.toUpperCase().includes(term.toUpperCase())) {
                partialResult.push(book);
            }
        });
        return partialResult;
    };
    LibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBv46RMRnnBDz5K3deQOwjcNI96-fQWq6U",
        authDomain: "library-ebd5a.firebaseapp.com",
        databaseURL: "https://library-ebd5a.firebaseio.com",
        projectId: "library-ebd5a",
        storageBucket: "library-ebd5a.appspot.com",
        messagingSenderId: "695476633258"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\project Adobe\60_prjt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map